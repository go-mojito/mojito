package introspector

import (
	"net/http"
	"reflect"
	"sync"
)

// HandlerArgFactory defines the signature of handler argument factories
type HandlerIntrospectorArgFactory func(ctx Context, next HandlerFunc) reflect.Value

var (
	factoryMap     = make(map[reflect.Type]HandlerIntrospectorArgFactory)
	factoryMapLock = sync.Mutex{}
)

func init() {
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

// RegisterHandlerArgFactory will register a factory function for the given generic type
// which will enable the generic type to be automatically resolved in all handlers.
func RegisterHandlerArgFactory[T any](factory HandlerIntrospectorArgFactory) {
	factoryMapLock.Lock()
	defer factoryMapLock.Unlock()
	argType := reflect.TypeOf((*T)(nil)).Elem()
	factoryMap[argType] = factory
}
