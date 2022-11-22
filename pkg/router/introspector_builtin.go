package router

import (
	"net/http"
	"reflect"

	"github.com/go-mojito/mojito/pkg/introspector"
)

var (
	errorInterface     = reflect.TypeOf((*error)(nil)).Elem()
	nextFuncTypeStdlib = reflect.TypeOf((*http.Handler)(nil)).Elem()
)

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
