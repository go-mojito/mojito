package introspector

import "reflect"

type Parent[FactoryFunc any] struct{}

func (t Parent[FactoryFunc]) FactoryMap() map[int]FactoryFunc {
	return make(map[int]FactoryFunc)
}

type TestResult struct {
	Parent[HandlerIntrospectorArgFactory]
}

func (t TestResult) CanError2() bool {
	return false
}

func test() {
	var i Introspector[HandlerIntrospectorArgFactory, TestResult]
	res, err := i.Introspect(func() {})

}

// HandlerIntrospector is a structure that contains all introspected details
// about a function
type HandlerIntrospector[T any] interface {
	// CanError returns true when the handler func is returning error
	CanError() bool

	// FactoryMap returns the factories mapped to the argument positions of the handler
	FactoryMap() map[int]T

	// IsStdlibMiddleware returns true when the handler func is a stdlib middleware
	IsStdlibMiddleware() bool

	// Type returns the handler reflection type
	Type() reflect.Type
}
