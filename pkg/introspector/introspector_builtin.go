package introspector

import (
	"errors"
	"fmt"
	"reflect"
	"sync"
)

type builtinIntrospector[FactoryFunc any, ResultType IntrospectorResult[FactoryFunc]] struct {
	factoryMapLock  sync.Mutex
	defaultFactory  func(t reflect.Type) (FactoryFunc, error)
	factoryMap      map[reflect.Type]FactoryFunc
	resultTypeField int
}

// FactoryMap returns the map with all registered factory functions for this instance
func (i *builtinIntrospector[F, R]) FactoryMap() map[reflect.Type]F {
	return i.factoryMap
}

// Introspect will introspect the given function and return an introspector result
func (i *builtinIntrospector[F, R]) Introspect(fun interface{}) (*R, error) {
	intro := &builtinIntrospectorResult[F]{
		factoryMap: make(map[int]F),
		handler:    reflect.TypeOf(fun),
	}

	// Retrieve factory functions for all handler arguments
	errors := make([]error, 0)

	for index := 0; index < intro.handler.NumIn(); index++ {
		if factory, exists := i.factoryMap[intro.handler.In(index)]; exists {
			intro.factoryMap[index] = factory
		} else if i.defaultFactory != nil {
			factory, err := i.defaultFactory(intro.handler.In(index))
			if err != nil {
				errors = append(errors, err)
				continue
			}
			intro.factoryMap[index] = factory
		} else {
			errors = append(errors, fmt.Errorf("no factory found for argument %d of type %s", index, intro.handler.In(index)))
		}
	}

	var resultObj *R = new(R)

	reflect.ValueOf(resultObj).Elem().Field(i.resultTypeField).Set(reflect.ValueOf(intro))

	if len(errors) > 0 {
		return resultObj, fmt.Errorf("%v", errors)
	}
	return resultObj, nil
}

// RegisterFactory will register a factory function for the given reflect type
func (i *builtinIntrospector[F, R]) RegisterFactory(reflectType reflect.Type, factory F) {
	i.factoryMapLock.Lock()
	defer i.factoryMapLock.Unlock()
	i.factoryMap[reflectType] = factory
}

// SetDefaultFactory will set the default factory function if no factory matched an encountered type
func (i *builtinIntrospector[F, R]) SetDefaultFactory(factory func(t reflect.Type) (F, error)) {
	i.factoryMapLock.Lock()
	defer i.factoryMapLock.Unlock()
	i.defaultFactory = factory
}

func NewIntrospector[F any, R IntrospectorResult[F]]() (Introspector[F, R], error) {
	resultType := reflect.TypeOf(*(new(R)))
	for index := 0; index < resultType.NumField(); index++ {
		field := resultType.Field(index)
		if field.Anonymous && field.Type.ConvertibleTo(reflect.TypeOf(new(IntrospectorResult[F])).Elem()) {
			return &builtinIntrospector[F, R]{
				factoryMapLock:  sync.Mutex{},
				factoryMap:      make(map[reflect.Type]F),
				resultTypeField: index,
			}, nil
		}
	}
	return nil, errors.New("result type does not have parent type IntrospectorResult")
}

type builtinIntrospectorResult[FactoryFunc any] struct {
	factoryMap map[int]FactoryFunc
	handler    reflect.Type
}

// FactoryMap returns the factories mapped to the argument positions of the handler
func (r *builtinIntrospectorResult[F]) FactoryMap() map[int]F {
	return r.factoryMap
}

// Type returns the handler reflection type
func (r *builtinIntrospectorResult[F]) Type() reflect.Type {
	return r.handler
}
