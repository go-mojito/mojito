package router

import "reflect"

// HandlerFunc describes the method signature of a mojito handler function that can
// process an incoming mojito.Requests. A handler func masks all middleware and dependency
// injection behind a simple, easy to use interface
type HandlerFunc func(ctx Context) error

// MiddlewareHandlerFunc is a special kind of HandlerFunc, that receives the next handler in line
// as its third parameter.
type MiddlewareHandlerFunc func(ctx Context, next interface{}) error

// Handler defines a mojito handler
type Handler interface {
	// AddMiddleware adds a middleware into the chain
	AddMiddleware(middleware interface{}) error

	// Introspection will return the introspected information about the handler
	Introspection() HandlerIntrospector

	// HandlerFunc will generate the original handlers function
	// without any chained middlewares
	HandlerFunc() HandlerFunc

	// Serve is the handler func that executes the handler and all the middlewares
	Serve(ctx Context) error

	// Value returns the reflection value of the handler func
	Value() reflect.Value
}

// Handleable defines the interface for a structure that can be used to create a handler
type Handleable interface {
	ToHandler() interface{}
}

// HandlerChain will chain a handler func and a middleware together to form a new, single handler func
func HandlerChain(f HandlerFunc, middleware MiddlewareHandlerFunc) HandlerFunc {
	return func(ctx Context) error {
		return middleware(ctx, func() error {
			return f(ctx)
		})
	}
}
