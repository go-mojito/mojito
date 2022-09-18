package router

// Router defines the minimal surface of a router compatible with this package
type Router interface {
	// WithGroup will create a new route group for the given prefix
	WithGroup(prefix string, callback func(group Group)) error
	// WithRoute will add a new route with the given RouteMethod to the router
	WithRoute(method string, path string, handler interface{}) error

	// WithNotFound will set the not found handler for the router
	WithNotFoundHandler(handler interface{}) error
	// WithMethodNotAllowedHandler will set the not allowed handler for the router
	WithMethodNotAllowedHandler(handler interface{}) error
	// WithErrorHandler will set the error handler for the router
	WithErrorHandler(handler interface{}) error
	// WithMiddleware will add a middleware to the router
	WithMiddleware(handler interface{}) error

	// ListenAndServe will start an HTTP webserver on the given address
	ListenAndServe(address string) error
	// ListenAndServeTLS will start an HTTP/S webserver on the given address
	ListenAndServeTLS(address string, certFile string, keyFile string) error
	// Shutdown will gracefully shutdown the router
	Shutdown() error
}
