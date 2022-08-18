package router

import (
	"fmt"
	"net/http"
	"reflect"
)

/// Stdlib factories

func stdlibRequestFactory(ctx Context, next HandlerFunc) reflect.Value {
	return reflect.ValueOf(ctx.Request().GetRequest())
}

func stdlibResponseFactory(ctx Context, next HandlerFunc) reflect.Value {
	return reflect.ValueOf(ctx.Response().GetWriter())
}

func stdlibHandlerFactory(ctx Context, next HandlerFunc) reflect.Value {
	if next == nil {
		return reflect.ValueOf(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// Do nothing because it's an empty default handler
		}))
	}
	return reflect.ValueOf(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx.Response().SetWriter(w)
		ctx.Request().SetRequest(r)
		if err := next(ctx); err != nil {
			fmt.Printf("stdlib handler failed: %s", err)
		}
	}))
}
