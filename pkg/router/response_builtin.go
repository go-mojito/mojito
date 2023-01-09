package router

import (
	"encoding/json"
	"net/http"
)

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
func (r *builtinResponse) SetWriter(res http.ResponseWriter) {
	r.ResponseWriter = res
}

/// Assistive functions

// WriteJSON writes any object to the response body as JSON
func (r *builtinResponse) WriteJSON(body interface{}, pretty bool) error {
	var data []byte
	var err error
	if pretty {
		data, err = json.MarshalIndent(body, "", "  ")
	} else {
		data, err = json.Marshal(body)
	}

	if err != nil {
		return err
	}

	r.Header().Set("Content-Type", "application/json")
	_, err = r.Write(data)
	return err
}

// WriteString will write a string to the response body
func (r *builtinResponse) WriteString(str string) error {
	_, err := r.Write([]byte(str))
	return err
}

// NewResponse will create a new instance of a mojito response for the given http.ResponseWriter object
func NewResponse(res http.ResponseWriter) Response {
	return &builtinResponse{
		res,
	}
}
