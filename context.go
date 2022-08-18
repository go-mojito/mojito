package mojito

import (
	"time"

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

	// SetViewCacheTTL sets the duration a rendered view is kept in the cache.
	// If the duration is 0, the view is cached forever.
	// If the duration is negative, the view is not cached.
	SetViewCacheTTL(t time.Duration)

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
	EnableReadCheck()
	Receive(out interface{}) error
	Send(data interface{}) error
}
