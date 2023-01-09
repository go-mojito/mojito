package router

import "net/http"

type Response interface {
	http.ResponseWriter

	// GetWriter returns the underlying response writer instance
	GetWriter() http.ResponseWriter

	// SetWriter replaces the underlying response writer instance
	SetWriter(res http.ResponseWriter)

	/// Assistive functions

	// WriteJSON writes any object to the response body as JSON
	WriteJSON(body interface{}, pretty bool) error

	// WriteString will write a string to the response body
	WriteString(str string) error
}
