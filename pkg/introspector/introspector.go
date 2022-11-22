package introspector

import (
	"reflect"
)

// Introspector allows to register factory functions and introspection of functions
// with the help of the registered factory functions.
type Introspector[FactoryFunc any, ResultType IntrospectorResult[FactoryFunc]] interface {
	// FactoryMap returns the map with all registered factory functions for this instance
	FactoryMap() map[reflect.Type]FactoryFunc

	// Introspect will introspect the given function and return an introspector result
	Introspect(fun interface{}) (*ResultType, error)

	// RegisterFactory will register a factory function for the given reflect type
	RegisterFactory(reflectType reflect.Type, factory FactoryFunc)

	// SetDefaultFactory will set the default factory function if no factory matched an encountered type
	SetDefaultFactory(factory func(reflect.Type) (FactoryFunc, error))
}

type IntrospectorResult[FactoryFunc any] interface {
	// FactoryMap returns the factories mapped to the argument positions of the handler
	FactoryMap() map[int]FactoryFunc

	// Type returns the handler reflection type
	Type() reflect.Type
}

// RegisterFactory will register a factory function for the given generic type on the given introspector
func RegisterFactory[T any, F any, R IntrospectorResult[F]](factory F, introspector Introspector[F, R]) {
	argType := reflect.TypeOf((*T)(nil)).Elem()
	introspector.RegisterFactory(argType, factory)
}
