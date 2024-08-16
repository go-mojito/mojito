package mojito

import (
	"time"

	"github.com/go-mojito/mojito/pkg/renderer"
	"github.com/go-mojito/mojito/pkg/router"
)

// Context contains the request and response objects of a request.
type Context interface {
	router.Context

	/// Assistive functions

	// JSON writes any object to the response body as JSON
	JSON(body interface{}) error

	// PrettyJSON writes any object to the response body as pretty JSON
	PrettyJSON(body interface{}) error

	// ReadJSON reads the request body as JSON and unmarshals it into the given object
	ReadJSON(obj interface{}) error

	// ReadXML reads the request body as XML and unmarshals it into the given object
	ReadXML(obj interface{}) error

	// Status will set the HTTP status code on the response
	Status(code int)

	// String will write a string to the response body
	String(body string) error
}

// RendererContext contains context for renderer based functionality.
type RendererContext interface {
	router.Context

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
