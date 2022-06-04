package router

import (
	"errors"
	"fmt"
	"net/http"
	"reflect"
	"runtime/debug"
)

var (
	// ErrorNotAHandler is returned when an attempt to get a handler from an interface{} failed.
	ErrorNotAHandler = errors.New("Given handler value is not of the type router.Handler")
	// handlerInterface is the golang type reflection of a router handler
	handlerInterface = reflect.TypeOf((*Handler)(nil)).Elem()
	// handlerablenterface is the golang type reflection of a handleable
	handlerablenterface = reflect.TypeOf((*Handleable)(nil)).Elem()
)

// Handler defines a router handler
type builtinHandler struct {
	// introspection contains the introspected type and argument information
	introspection HandlerIntrospector

	// contextValue may be a reflection of the context argument which has been filled
	// with all expected dependencies ahead of time. This is for caching and performance purposes
	contextValue reflect.Value
	// reflectValue is a reflection of the handler object used to call the original handler
	reflectValue reflect.Value
	// reflectHandler is the current handler to be called when served
	reflectHandler HandlerFunc
}

// AddMiddleware adds a middleware into the chain
func (h *builtinHandler) AddMiddleware(middleware interface{}) error {
	middleHandler, err := NewHandler(middleware)
	if err != nil {
		return err
	}

	// Chain the current handler with the middleware for performance reasons
	oldHandler := h.reflectHandler
	h.reflectHandler = func(ctx Context) error {
		arguments := make([]reflect.Value, middleHandler.Introspection().Type().NumIn())
		for i := 0; i < middleHandler.Introspection().Type().NumIn(); i++ {
			arguments[i] = middleHandler.Introspection().FactoryMap()[i](ctx, oldHandler)
		}
		returnVal := middleHandler.Value().Call(arguments)
		if middleHandler.Introspection().CanError() && !returnVal[0].IsNil() {
			return returnVal[0].Interface().(error)
		}
		if middleHandler.Introspection().IsStdlibMiddleware() {
			(returnVal[0].Interface().(http.Handler)).ServeHTTP(ctx.Response(), ctx.Request().GetRequest())
		}
		return nil
	}
	return nil
}

// Introspection will return the introspected information about the handler
func (h builtinHandler) Introspection() HandlerIntrospector {
	return h.introspection
}

// HandlerFunc will generate the original handlers function
// without any chained middlewares
func (h builtinHandler) HandlerFunc() HandlerFunc {
	return func(ctx Context) error {
		arguments := make([]reflect.Value, h.introspection.Type().NumIn())
		for i := 0; i < h.introspection.Type().NumIn(); i++ {
			arguments[i] = h.introspection.FactoryMap()[i](ctx, nil)
		}

		returnVal := h.reflectValue.Call(arguments)
		if h.introspection.CanError() && !returnVal[0].IsNil() {
			return returnVal[0].Interface().(error)
		}
		return nil
	}
}

// Serve is the handler func that executes the handler and all the middlewares
func (h builtinHandler) Serve(ctx Context) (err error) {
	defer func() {
		if e := recover(); e != nil {
			err = fmt.Errorf("%v: %s", e, string(debug.Stack()))
		}
		ctx.complete()
	}()
	return h.reflectHandler(ctx)
}

// Value returns the reflection value of the handler func
func (h builtinHandler) Value() reflect.Value {
	return h.reflectValue
}

// GetHandler will try to cast the given value into a handler, but will fail
// if the value is not of type (*)mojito.Handler
func GetHandler(handler interface{}) (Handler, error) {
	reflectType := reflect.TypeOf(handler)
	if reflectType.AssignableTo(handlerInterface) {
		h := handler.(Handler)
		return h, nil
	}
	if reflectType.AssignableTo(handlerablenterface) {
		h := handler.(Handleable)
		return NewHandler(h.ToHandler())
	}
	return nil, ErrorNotAHandler
}

func GetOrCreateHandler(handler interface{}) (Handler, error) {
	h, err := GetHandler(handler)
	if err != nil {
		// Check if the handler is of kind func, else this is not a valid handler.
		if reflect.TypeOf(handler).Kind() != reflect.Func {
			return nil, errors.New("handler is not a mojit.Handler nor func")
		}

		// The handler is of kind func, attempt to create a new mojito.Handler for it
		h, err = NewHandler(handler)
		if err != nil {
			return nil, err
		}
	}

	// Safety check, this should never happen
	if h == nil {
		return nil, errors.New("mojito.Handler was unexpectedly nil")
	}
	return h, nil
}

// NewHandler will introspect the given handler and, if valid, return
// a new handler instance that can serve a route
func NewHandler(handler interface{}) (Handler, error) {
	intro, err := IntrospectHandler(handler)
	if err != nil {
		return nil, err
	}
	h := &builtinHandler{
		introspection: intro,
		reflectValue:  reflect.ValueOf(handler),
	}
	h.reflectHandler = h.HandlerFunc()
	return h, nil
}
