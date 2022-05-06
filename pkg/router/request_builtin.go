package router

import (
	"net/http"
)

// builtinRequest is the mojito implementation of a request which wraps around a
// regular http.Request object.
type builtinRequest struct {
	request *http.Request
	Params  map[string]string
}

// Request returns the underlying http.Request object
func (r builtinRequest) GetRequest() *http.Request {
	return r.request
}

// Request replaces the underlying http.Request object
func (r *builtinRequest) SetRequest(req *http.Request) {
	r.request = req
}

/// Route Parameters

// Param returns the route parameter or empty string if not found
func (r builtinRequest) Param(name string) string {
	if param, ok := r.Params[name]; ok {
		return param
	}
	return ""
}

// ParamOrDefault returns the route parameter or a custom default if not found
func (r builtinRequest) ParamOrDefault(name string, def string) string {
	if param := r.Param(name); param != "" {
		return param
	}
	return def
}

func (r *builtinRequest) SetParams(params map[string]string) {
	r.Params = params
}

// NewRequest will create a new instance of a mojito request for the given http.Request object
func NewRequest(req *http.Request) Request {
	return &builtinRequest{
		req,
		make(map[string]string),
	}
}
