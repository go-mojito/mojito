package router

import (
	"context"

	"github.com/infinytum/structures"
)

// Context defines the basic feature and dataset of a context
// A context is a set of data that is passed through the middleware chain and
// finally the handler. It is used to store data and provide access to the
// request and response objects.
//
// The context may be extended using a custom context type. The custom context
// type must implement the Context interface. To use a custom context type,
// it must be registered using a HandlerArgFactory. See "router.RegisterHandlerArgFactory"
// and "router.RegisterStatefulHandlerArgFactory" for more information.
type Context interface {
	// Context embeds the standard context.Context interface
	context.Context

	// Metadata is used to decorate the context with additional data.
	// Useful to provide additional context about the current request.
	// Examples: User, RequestID, Ingress, etc.
	// Metadata is not a data store, use Value and SetValue for that.
	Metadata() structures.Map[string, interface{}]

	// Request returns a wrapper around the standard http.Request object
	// which provides assistive functions.
	//
	// The contained http.Request is the original request object passed to the
	// handler. The request object may be modified or replaced by the middleware chain.
	Request() Request

	// Response returns a wrapper around the response writer which provides
	// assistive functions for writing to the response body.
	//
	// The contained response writer is the original response writer passed to
	// the handler. The response writer may be modified or replaced by the middleware chain.
	Response() Response

	// SetValue modifies the context to contain the given value for the given key
	// This is a replacement for the context.WithValue function, since the type is not retained.
	// The embedded context.Context is kept immutable and gets replaced, never modified.
	SetValue(key any, value any)
}
