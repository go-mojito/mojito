package introspector

import (
	"reflect"
)

// Introspector allows to register factory functions and introspection of functions
// with the help of the registered factory functions.
type Introspector[FactoryFunc any, ResultType any] interface {
	// FactoryMap returns the map with all registered factory functions for this instance
	FactoryMap() map[reflect.Type]FactoryFunc

	// Introspect will introspect the given function and return an introspector result
	Introspect(fun interface{}) (ResultType, error)

	// RegisterFactory will register a factory function for the given reflect type
	RegisterFactory(reflectType reflect.Type, factory FactoryFunc)
}

type IntrospectorResult[FactoryFunc any] interface {
	// FactoryMap returns the factories mapped to the argument positions of the handler
	FactoryMap() map[int]FactoryFunc

	// Type returns the handler reflection type
	Type() reflect.Type
}

type IntrospectorResultFactory[FactoryFunc any, Result any] func(result IntrospectorResult[FactoryFunc]) Result
