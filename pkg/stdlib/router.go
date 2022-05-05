package stdlib

import (
	"fmt"
	"net/http"

	"github.com/go-mojito/mojito/pkg/router"
	"github.com/julienschmidt/httprouter"
)

type Router struct {
	Middleware []interface{}
	Routes     []router.Handler
	Router     *httprouter.Router
	Server     *http.Server
}

// NewRouter will create new instance of the mojito stdlib router implementation
func NewRouter() *Router {
	return &Router{
		Middleware: make([]interface{}, 0),
		Routes:     make([]router.Handler, 0),
		Router:     httprouter.New(),
	}
}

// GET will add a route to this router for the get method
func (r *Router) GET(path string, handler interface{}) error {
	return r.WithRoute(http.MethodGet, path, handler)
}

// HEAD will add a route to this router for the head method
func (r *Router) HEAD(path string, handler interface{}) error {
	return r.WithRoute(http.MethodHead, path, handler)
}

// POST will add a route to this router for the post method
func (r *Router) POST(path string, handler interface{}) error {
	return r.WithRoute(http.MethodPost, path, handler)
}

// PUT will add a route to this router for the put method
func (r *Router) PUT(path string, handler interface{}) error {
	return r.WithRoute(http.MethodPut, path, handler)
}

// DELETE will add a route to this router for the delete method
func (r *Router) DELETE(path string, handler interface{}) error {
	return r.WithRoute(http.MethodDelete, path, handler)
}

// CONNECT will add a route to this router for the connect method
func (r *Router) CONNECT(path string, handler interface{}) error {
	return r.WithRoute(http.MethodConnect, path, handler)
}

// OPTIONS will add a route to this router for the options method
func (r *Router) OPTIONS(path string, handler interface{}) error {
	return r.WithRoute(http.MethodOptions, path, handler)
}

// TRACE will add a route to this router for the trace method
func (r *Router) TRACE(path string, handler interface{}) error {
	return r.WithRoute(http.MethodTrace, path, handler)
}

// PATCH will add a route to this router for the patch method
func (r *Router) PATCH(path string, handler interface{}) error {
	return r.WithRoute(http.MethodPatch, path, handler)
}

// WithGroup will create a new route group for the given prefix
func (r *Router) WithGroup(path string, callback func(group router.Group)) error {
	rg := router.NewGroup()
	callback(rg)
	return rg.ApplyToRouter(r, path)
}

// WithRoute will add a new route with the given RouteMethod to the router
func (r *Router) WithRoute(method string, path string, handler interface{}) error {
	h, err := router.GetOrCreateHandler(handler)
	if err != nil {
		return err
	}

	// Chain router-wide middleware to the (new) handler
	for _, middleware := range r.Middleware {
		if err := h.AddMiddleware(middleware); err != nil {
			return err
		}
	}

	r.Router.Handle(method, path, withMojitoHandlerRouter(h))
	return nil
}

// WithNotFound will set the not found handler for the router
func (r *Router) WithNotFound(handler interface{}) error {
	if h, err := router.GetOrCreateHandler(handler); err != nil {
		return err
	} else {
		r.Router.NotFound = withMojitoHandler(h)
	}
	return nil
}

// WithNotAllowed will set the not allowed handler for the router
func (r *Router) WithNotAllowed(handler interface{}) error {
	if h, err := router.GetOrCreateHandler(handler); err != nil {
		return err
	} else {
		r.Router.MethodNotAllowed = withMojitoHandler(h)
	}
	return nil
}

// WithErrorHandler will set the error handler for the router
func (r *Router) WithErrorHandler(handler interface{}) error {
	if h, err := router.GetOrCreateHandler(handler); err != nil {
		return err
	} else {
		r.Router.PanicHandler = withMojitoHandlerError(h)
	}
	return nil
}

// WithMiddleware will add a middleware to the router
func (r *Router) WithMiddleware(handler interface{}) error {
	for _, h := range r.Routes {
		if err := h.AddMiddleware(handler); err != nil {
			return err
		}
	}
	r.Middleware = append(r.Middleware, handler)
	return nil
}

// ListenAndServe will start an HTTP webserver on the given address
func (r *Router) ListenAndServe(address string) error {
	r.Server = &http.Server{
		Addr:    address,
		Handler: r.Router,
	}
	return r.Server.ListenAndServe()
}

// Shutdown will gracefully shutdown the router
func (r *Router) Shutdown() error {
	return r.Server.Close()
}

func withMojitoHandler(handler router.Handler) http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		mreq := router.NewRequest(req)
		mres := router.NewResponse(res)
		ctx := router.NewContext(mreq, mres)
		if err := handler.Serve(ctx); err != nil {
			panic(err)
		}
	}
}

func withMojitoHandlerError(handler router.Handler) func(http.ResponseWriter, *http.Request, interface{}) {
	return func(res http.ResponseWriter, req *http.Request, rec interface{}) {
		ctx := router.NewContextFromStdlib(res, req)
		err := router.NewErrorContext(ctx, fmt.Errorf("%v", rec))
		if err := handler.Serve(err); err != nil {
			panic(err)
		}
	}
}

func withMojitoHandlerRouter(handler router.Handler) httprouter.Handle {
	return func(res http.ResponseWriter, req *http.Request, ps httprouter.Params) {
		params := make(map[string]string)
		for _, p := range ps {
			params[p.Key] = p.Value
		}
		mreq := router.NewRequest(req)
		mreq.SetParams(params)
		mres := router.NewResponse(res)
		ctx := router.NewContext(mreq, mres)
		if err := handler.Serve(ctx); err != nil {
			panic(err)
		}
	}
}
