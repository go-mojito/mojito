package router

import "net/http"

type Response interface {
	http.ResponseWriter

	// GetWriter returns the underlying response writer instance
	GetWriter() http.ResponseWriter

	// SetWriter replaces the underlying response writer instance
	SetWriter(res http.ResponseWriter)
}
