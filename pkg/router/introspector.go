package router

import (
	"net/http"
	"reflect"

	"github.com/go-mojito/mojito/pkg/introspector"
)

var (
	errorInterface      = reflect.TypeOf((*error)(nil)).Elem()
	handlerIntrospector introspector.Introspector[HandlerIntrospectorArgFactory, builtinHandlerIntrospection]
	nextFuncTypeStdlib  = reflect.TypeOf((*http.Handler)(nil)).Elem()
)

func init() {
	i, err := introspector.NewIntrospector[HandlerIntrospectorArgFactory, builtinHandlerIntrospection]()
	if err != nil {
		panic(err)
	}
	handlerIntrospector = i

	handlerIntrospector.SetDefaultFactory(func(t reflect.Type) (HandlerIntrospectorArgFactory, error) {
		val, err := introspector.InjectorFactoryFunc(t)
		return func(ctx Context, next HandlerFunc) reflect.Value {
			return *val
		}, err
	})

	// Stdlib
	RegisterHandlerArgFactory[*http.Request](stdlibRequestFactory)
	RegisterHandlerArgFactory[http.ResponseWriter](stdlibResponseFactory)
	RegisterHandlerArgFactory[http.Handler](stdlibHandlerFactory)
	RegisterHandlerArgFactory[http.HandlerFunc](stdlibHandlerFactory)

	// Middleware-related
	RegisterHandlerArgFactory[func() error](newNextFuncFactory)
	RegisterHandlerArgFactory[HandlerFunc](newNextFuncFactory)

	// Context
	RegisterHandlerArgFactory[Context](newContextFactory)
}

// HandlerArgFactory defines the signature of handler argument factories
type HandlerIntrospectorArgFactory func(ctx Context, next HandlerFunc) reflect.Value

// HandlerIntrospection is a structure that contains all introspected details
// about a (potential) handler
type HandlerIntrospection interface {
	introspector.IntrospectorResult[HandlerIntrospectorArgFactory]

	// CanError returns true when the handler func is returning error
	CanError() bool

	// IsStdlibMiddleware returns true when the handler func is a stdlib middleware
	IsStdlibMiddleware() bool
}

// HandlerIntrospection is a structure that contains all introspected details
// about a (potential) handler
type builtinHandlerIntrospection struct {
	introspector.IntrospectorResult[HandlerIntrospectorArgFactory]
}

// CanError returns true when the handler func is returning error
func (h builtinHandlerIntrospection) CanError() bool {
	if h.Type().NumOut() != 1 {
		return false
	}
	return h.Type().Out(0).Implements(errorInterface)
}

// IsStdlibMiddleware returns true when the handler func is a stdlib middleware
func (h builtinHandlerIntrospection) IsStdlibMiddleware() bool {
	if h.Type().NumOut() != 1 {
		return false
	}
	return h.Type().Out(0).AssignableTo(nextFuncTypeStdlib)
}

// RegisterHandlerArgFactory will register a factory function for the given generic type
// which will enable the generic type to be automatically resolved in all handlers.
func RegisterHandlerArgFactory[T any](factory HandlerIntrospectorArgFactory) {
	introspector.RegisterFactory[T](factory, handlerIntrospector)
}
