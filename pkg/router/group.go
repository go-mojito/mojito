package router

// Router defines the minimal surface of a router group compatible with this package
type Group interface {
	// GET will add a route to this route group for the get method
	GET(path string, handler interface{})
	// HEAD will add a route to this route group for the head method
	HEAD(path string, handler interface{})
	// POST will add a route to this route group for the post method
	POST(path string, handler interface{})
	// PUT will add a route to this route group for the put method
	PUT(path string, handler interface{})
	// DELETE will add a route to this route group for the delete method
	DELETE(path string, handler interface{})
	// CONNECT will add a route to this route group for the connect method
	CONNECT(path string, handler interface{})
	// OPTIONS will add a route to this route group for the options method
	OPTIONS(path string, handler interface{})
	// TRACE will add a route to this route group for the trace method
	TRACE(path string, handler interface{})
	// PATCH will add a route to this route group for the patch method
	PATCH(path string, handler interface{})

	// WithMiddleware will add a middleware to the route group
	WithMiddleware(handler interface{})
	// WithRoute will add a new route with the given http method to the router group
	WithRoute(method string, path string, handler interface{})

	/// Functions for Router Implementations

	// Middleware will return a list of potential middlewares that were registered on this router group
	Middleware() []interface{}

	// ApplyToRouter will attempt to merge all middlewares with the collected route handlers
	// and then attempt to register the routes on the router with a given prefix.
	// Will return an error if any of the steps throw an error
	ApplyToRouter(router Router, prefix string) error
}
