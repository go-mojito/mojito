package mojito

import (
	"github.com/go-mojito/mojito/pkg/renderer"
	"github.com/go-mojito/mojito/pkg/router"
)

// Context contains the request and response objects of a request.
type Context interface {
	router.Context
}

// ErrorContext contains for error handlers.
type ErrorContext interface {
	router.ErrorContext
}

// RendererContext contains context for renderer based functionality.
type RendererContext interface {
	Context

	// View will use the default renderer to load a view and render it
	// to the response body using the response object's ViewBag
	View(view string) error

	// MustView will execute View and panic if an error is returned
	MustView(view string)

	// ViewBag
	ViewBag() renderer.ViewBag
}

// WebSocketContext contains context for websocket functionality.
type WebSocketContext interface {
	Context
	Closed() bool
	Receive(out interface{}) error
	Send(data interface{}) error
}
