package mojito

import (
	"github.com/go-mojito/mojito/pkg/cache"
	"github.com/go-mojito/mojito/pkg/logger"
	"github.com/go-mojito/mojito/pkg/renderer"
	"github.com/go-mojito/mojito/pkg/router"
)

// Cache defines the minimum API surface for a valid mojito cache
type Cache interface {
	cache.Cache
}

// Logger defines the interface of a mojito compatible logger implementation
type Logger interface {
	logger.Logger
}

// Renderer defines the interface of a mojito compatible renderer
type Renderer interface {
	renderer.Renderer
}

// FileRenderer defines the interface of a mojito compatible renderer that's based on
// file templates
type FileRenderer interface {
	Renderer

	// SetTemplateDir will set the base directory where views are located
	SetTemplateDir(path string) error

	// TemplateDir will return the base directory where views are located
	TemplateDir() string
}

// Router defines a struct that can route requests,
// create route groups as well as start a webserver
type Router interface {
	router.Router

	// GET will add a route to this router for the get method
	GET(path string, handler interface{}) error
	// HEAD will add a route to this router for the head method
	HEAD(path string, handler interface{}) error
	// POST will add a route to this router for the post method
	POST(path string, handler interface{}) error
	// PUT will add a route to this router for the put method
	PUT(path string, handler interface{}) error
	// DELETE will add a route to this router for the delete method
	DELETE(path string, handler interface{}) error
	// CONNECT will add a route to this router for the connect method
	CONNECT(path string, handler interface{}) error
	// OPTIONS will add a route to this router for the options method
	OPTIONS(path string, handler interface{}) error
	// TRACE will add a route to this router for the trace method
	TRACE(path string, handler interface{}) error
	// PATCH will add a route to this router for the patch method
	PATCH(path string, handler interface{}) error
}
