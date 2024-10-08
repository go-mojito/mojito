package stdlib

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/go-mojito/mojito/pkg/router"
	"github.com/julienschmidt/httprouter"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

type Router struct {
	Middleware []interface{}
	Routes     []router.Handler
	Router     *httprouter.Router
	Server     *http.Server

	ErrorHandler router.Handler
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

	r.Router.Handle(method, path, r.withMojitoHandlerRouter(h))
	r.Routes = append(r.Routes, h)
	return nil
}

// WithNotFoundHandler will set the not found handler for the router
func (r *Router) WithNotFoundHandler(handler interface{}) error {
	if h, err := router.GetOrCreateHandler(handler); err != nil {
		return err
	} else {
		r.Router.NotFound = r.withMojitoHandler(h)
	}
	return nil
}

// WithMethodNotAllowedHandler will set the not allowed handler for the router
func (r *Router) WithMethodNotAllowedHandler(handler interface{}) error {
	if h, err := router.GetOrCreateHandler(handler); err != nil {
		return err
	} else {
		r.Router.MethodNotAllowed = r.withMojitoHandler(h)
	}
	return nil
}

// WithErrorHandler will set the error handler for the router
func (r *Router) WithErrorHandler(handler interface{}) error {
	h, err := router.GetOrCreateHandler(handler)
	if err != nil {
		return err
	}
	r.ErrorHandler = h
	r.Router.PanicHandler = r.onError
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
	h2s := &http2.Server{}

	r.Server = &http.Server{
		Addr:              address,
		Handler:           h2c.NewHandler(r.Router, h2s),
		ReadHeaderTimeout: 5 * time.Second,
	}
	return r.Server.ListenAndServe()
}

// ListenAndServeTLS will start an HTTP/S webserver on the given address
func (r *Router) ListenAndServeTLS(address string, certFile string, keyFile string) error {
	r.Server = &http.Server{
		Addr:              address,
		Handler:           r.Router,
		ReadHeaderTimeout: 5 * time.Second,
	}
	return r.Server.ListenAndServeTLS(certFile, keyFile)
}

// Shutdown will gracefully shutdown the router
func (r *Router) Shutdown() error {
	return r.Server.Close()
}

func (r *Router) onError(res http.ResponseWriter, req *http.Request, rec interface{}) {
	mreq := router.NewRequest(req)
	mres := router.NewResponse(res)
	ctx, cancel := router.NewContext(mreq, mres)
	cancel(fmt.Errorf("%v", rec))
	if err := r.ErrorHandler.Serve(ctx); err != nil {
		panic(err)
	}
}

func (r *Router) withMojitoHandler(handler router.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		r.withMojitoHandlerRouter(handler)(w, req, make(httprouter.Params, 0))
	}
}

func (r *Router) withMojitoHandlerRouter(handler router.Handler) httprouter.Handle {
	return func(res http.ResponseWriter, req *http.Request, ps httprouter.Params) {
		params := make(map[string]string, len(ps))
		for _, p := range ps {
			params[p.Key] = p.Value
		}
		mreq := router.NewRequest(req)
		mreq.SetParams(params)
		mres := router.NewResponse(res)
		ctx, cancel := router.NewContext(mreq, mres)
		cancel(handler.Serve(ctx))
		if ctx.Err() != context.Canceled {
			if r.ErrorHandler != nil {
				if err := r.ErrorHandler.Serve(ctx); err != nil && err != context.Canceled {
					panic(err)
				}
			} else {
				panic(ctx.Err())
			}
		}
	}
}
