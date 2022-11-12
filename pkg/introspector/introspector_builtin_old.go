package introspector

import (
	"fmt"
	"net/http"
	"reflect"
)

var (
	errorInterface     = reflect.TypeOf((*error)(nil)).Elem()
	nextFuncTypeStdlib = reflect.TypeOf((*http.Handler)(nil)).Elem()
)

// HandlerIntrospection is a structure that contains all introspected details
// about a (potential) handler
type builtinHandlerIntrospection struct {
	// argumentFactoryMap contains all discovered factories for the arguments
	argumentFactoryMap map[int]HandlerIntrospectorArgFactory
	// reflectType is a type reflection of the handler used to auto-discover it's fields and types
	handlerType reflect.Type
}

// CanError returns true when the handler func is returning error
func (h builtinHandlerIntrospection) CanError() bool {
	if h.handlerType.NumOut() != 1 {
		return false
	}
	return h.handlerType.Out(0).Implements(errorInterface)
}

// FactoryMap returns the factories mapped to the argument positions of the handler
func (h builtinHandlerIntrospection) FactoryMap() map[int]HandlerIntrospectorArgFactory {
	return h.argumentFactoryMap
}

// IsStdlibMiddleware returns true when the handler func is a stdlib middleware
func (h builtinHandlerIntrospection) IsStdlibMiddleware() bool {
	if h.handlerType.NumOut() != 1 {
		return false
	}
	return h.handlerType.Out(0).AssignableTo(nextFuncTypeStdlib)
}

// Type returns the handler reflection type
func (h builtinHandlerIntrospection) Type() reflect.Type {
	return h.handlerType
}

func IntrospectHandler(handler interface{}) (HandlerIntrospector, error) {
	intro := &builtinHandlerIntrospection{
		argumentFactoryMap: make(map[int]HandlerIntrospectorArgFactory),
		handlerType:        reflect.TypeOf(handler),
	}

	// Retrieve factory functions for all handler arguments
	errors := make([]error, 0)
	for i := 0; i < intro.handlerType.NumIn(); i++ {
		if factory, exists := factoryMap[intro.handlerType.In(i)]; exists {
			intro.argumentFactoryMap[i] = factory
		} else {
			factory, err := newDefaultHandlerArgFactory(intro.handlerType.In(i))
			if err != nil {
				errors = append(errors, err)
				continue
			}
			intro.argumentFactoryMap[i] = factory
		}
	}
	if len(errors) == 0 {
		return intro, nil
	}
	return intro, fmt.Errorf("%v", errors)
}
