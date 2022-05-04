package mojito

import (
	"github.com/go-mojito/mojito/pkg/renderer"
	"github.com/go-mojito/mojito/pkg/router"
)

// Context contains the request and response objects of a request.
type Context interface {
	router.Context
}

// RendererContext contains context for renderer based functionality.
type RendererContext interface {
	Context

	// View will use the default renderer to load a view and render it
	// to the response body using the response object's ViewBag
	View(view string) error

	// MustView is like view wiht panicing
	MustView(view string)

	// ViewBag
	ViewBag() renderer.ViewBag
}
