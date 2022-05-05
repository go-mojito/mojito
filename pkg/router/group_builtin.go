package router

import (
	"net/http"
	"strings"
)

type builtinGroupRoute struct {
	handler interface{}
	method  string
	path    string
}

type builtinGroup struct {
	routes     map[string]builtinGroupRoute
	middleware []interface{}
}

// GET will register a new route using the get method
func (g *builtinGroup) GET(path string, handler interface{}) {
	g.WithRoute(http.MethodGet, path, handler)
}

// HEAD will register a new route using the head method
func (g *builtinGroup) HEAD(path string, handler interface{}) {
	g.WithRoute(http.MethodHead, path, handler)
}

// POST will register a new route using the post method
func (g *builtinGroup) POST(path string, handler interface{}) {
	g.WithRoute(http.MethodPost, path, handler)
}

// PUT will register a new route using the put method
func (g *builtinGroup) PUT(path string, handler interface{}) {
	g.WithRoute(http.MethodPut, path, handler)
}

// DELETE will register a new route using the delete method
func (g *builtinGroup) DELETE(path string, handler interface{}) {
	g.WithRoute(http.MethodDelete, path, handler)
}

// CONNECT will register a new route using the connect method
func (g *builtinGroup) CONNECT(path string, handler interface{}) {
	g.WithRoute(http.MethodConnect, path, handler)
}

// OPTIONS will register a new route using the options method
func (g *builtinGroup) OPTIONS(path string, handler interface{}) {
	g.WithRoute(http.MethodOptions, path, handler)
}

// TRACE will register a new route using the trace method
func (g *builtinGroup) TRACE(path string, handler interface{}) {
	g.WithRoute(http.MethodTrace, path, handler)
}

// PATCH will register a new route using the patch method
func (g *builtinGroup) PATCH(path string, handler interface{}) {
	g.WithRoute(http.MethodPatch, path, handler)
}

//// Generic functions for adding routes and middleware

// WithMiddleware will add a middleware to all registered and future routes
// in this route group
func (g *builtinGroup) WithMiddleware(middleware interface{}) {
	g.middleware = append(g.middleware, middleware)
}

// WithRoute will add a new route with the given RouteMethod to the route group
func (g *builtinGroup) WithRoute(method string, path string, handler interface{}) {
	g.routes[path] = builtinGroupRoute{
		handler: handler,
		method:  method,
		path:    path,
	}
}

// ApplyToRouter applies all routes in the route group to a given router
func (g *builtinGroup) ApplyToRouter(router Router, prefix string) error {
	for _, route := range g.routes {
		h, err := NewHandler(route.handler)
		if err != nil {
			return err
		}
		for _, middleware := range g.Middleware() {
			err := h.AddMiddleware(middleware)
			if err != nil {
				return err
			}
		}
		if strings.HasSuffix(prefix, "/") {
			route.path = strings.TrimLeft(route.path, "/")
		}
		if err := router.WithRoute(route.method, prefix+route.path, h); err != nil {
			return err
		}
	}
	return nil
}

func (g *builtinGroup) Middleware() []interface{} {
	return g.middleware
}

func NewGroup() Group {
	return &builtinGroup{
		routes: make(map[string]builtinGroupRoute),
	}
}
