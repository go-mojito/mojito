package router

// Router defines the minimal surface of a router compatible with this package
type Router interface {
	// WithGroup will create a new route group for the given prefix
	WithGroup(prefix string, callback func(group Group)) error
	// WithRoute will add a new route with the given RouteMethod to the router
	WithRoute(method string, path string, handler interface{}) error
}
