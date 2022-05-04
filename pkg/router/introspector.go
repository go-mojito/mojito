package router

import "reflect"

// HandlerArgFactory defines the signature of handler argument factories
type HandlerIntrospectorArgFactory func(ctx Context, next HandlerFunc) reflect.Value

// HandlerIntrospector is a structure that contains all introspected details
// about a (potential) handler
type HandlerIntrospector interface {
	// CanError returns true when the handler func is returning error
	CanError() bool

	// FactoryMap returns the factories mapped to the argument positions of the handler
	FactoryMap() map[int]HandlerIntrospectorArgFactory

	// IsStdlibMiddleware returns true when the handler func is a stdlib middleware
	IsStdlibMiddleware() bool

	// Type returns the handler reflection type
	Type() reflect.Type
}
