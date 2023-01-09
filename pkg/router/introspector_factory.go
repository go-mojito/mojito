package router

import (
	"net/http"
	"reflect"
)

/// Middleware-related factories

func newContextFactory(ctx Context, next HandlerFunc) (reflect.Value, error) {
	return reflect.ValueOf(ctx), nil
}

func newNextFuncFactory(ctx Context, next HandlerFunc) (reflect.Value, error) {
	if next == nil {
		return reflect.ValueOf(func() error {
			// Do nothing because it's an empty default handler
			return nil
		}), nil
	}
	return reflect.ValueOf(func() error {
		return next(ctx)
	}), nil
}

/// Stdlib factories

func stdlibRequestFactory(ctx Context, next HandlerFunc) (reflect.Value, error) {
	return reflect.ValueOf(ctx.Request().GetRequest()), nil
}

func stdlibResponseFactory(ctx Context, next HandlerFunc) (reflect.Value, error) {
	return reflect.ValueOf(ctx.Response().GetWriter()), nil
}

func stdlibHandlerFactory(ctx Context, next HandlerFunc) (reflect.Value, error) {
	if next == nil {
		return reflect.ValueOf(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// Do nothing because it's an empty default handler
		})), nil
	}
	return reflect.ValueOf(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx.Response().SetWriter(w)
		ctx.Request().SetRequest(r)
		if err := next(ctx); err != nil {
			panic(err)
		}
	})), nil
}
