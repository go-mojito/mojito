package router

import "net/http"

type Request interface {
	// GetRequest returns the underlying http.Request object
	GetRequest() *http.Request

	// Request replaces the underlying http.Request object
	SetRequest(req *http.Request)

	/// Route Parameters

	// Param returns the route parameter or empty string if not found
	Param(name string) string

	// ParamOrDefault returns the route parameter or a custom default if not found
	ParamOrDefault(name string, def string) string

	// SetParams will set the routep params for this request
	SetParams(params map[string]string)

	/// Util Functions

	// HasContentType determines whether a request has a given mime type as its content type
	HasContentType(mimetype string) bool
}
