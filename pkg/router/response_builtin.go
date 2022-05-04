package router

import (
	"net/http"
)

var viewCachePrefix = "view_cache_"

// builtinResponse is the mojito implementation of a response which wraps around a regular
// http.ResponseWriter object
type builtinResponse struct {
	http.ResponseWriter
}

// ResponseWriter returns the underlying response writer instance
func (r builtinResponse) GetWriter() http.ResponseWriter {
	return r.ResponseWriter
}

// SetResponseWriter replaces the underlying response writer instance
func (r builtinResponse) SetWriter(res http.ResponseWriter) {
	r.ResponseWriter = res
}

// NewResponse will create a new instance of a mojito response for the given http.ResponseWriter object
func NewResponse(res http.ResponseWriter) Response {
	return &builtinResponse{
		res,
	}
}
