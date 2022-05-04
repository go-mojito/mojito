package router

import "github.com/infinytum/structures"

// Context contains the request and response objects of a request.
type Context interface {
	// Request returns the request object for the current context
	Request() Request

	// Response returns the response object for the current context
	Response() Response

	// Error returns the error object for the current context
	Error() error

	/// Assistive functions

	// Response is the mojito implementation of a response which wraps around a regular
	// http.ResponseWriter object
	JSON(body interface{}) error

	// PrettyJSON writes any object to the response body as pretty JSON
	PrettyJSON(body interface{}) error

	// Metadata contains the metadata about the current context
	Metadata() structures.Map[string, interface{}]

	// String will write a string to the response body
	String(body string) error
}
