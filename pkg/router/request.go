package router

import "net/http"

type Request interface {
	// GetRequest returns the underlying http.Request object
	GetRequest() *http.Request

	// Request replaces the underlying http.Request object
	SetRequest(req *http.Request)

	/// Assistive functions

	// Body returns a copy of the request body
	Body() ([]byte, error)

	// Header returns the first value for the given header name
	Header(name string) string

	/// Route Parameters

	// Param returns the route parameter or empty string if not found
	Param(name string) string

	// ParamOrDefault returns the route parameter or a custom default if not found
	ParamOrDefault(name string, def string) string

	// SetParams will set the routep params for this request
	SetParams(params map[string]string)

	/// Util Functions

	// ParseString returns the request body as a string
	ParseString() (string, error)

	// ParseJSON will attempt to parse the request body as JSON
	ParseJSON(obj interface{}) error

	// ParseXML will attempt to parse the request body as XML
	ParseXML(obj interface{}) error

	// HasContentType determines whether a request has a given mime type as its content type
	HasContentType(mimetype string) bool
}
