package router

import (
	"bytes"
	"encoding/json"
	"encoding/xml"
	"io"
	"mime"
	"net/http"
	"strings"
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

/// Assistive functions

// Body returns a copy of the request body
func (r builtinRequest) Body() ([]byte, error) {
	body, err := io.ReadAll(r.request.Body)
	r.request.Body = io.NopCloser(bytes.NewBuffer(body))
	return body, err
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

/// Util Functions

// ParseString returns the request body as a string
func (r *builtinRequest) ParseString() (string, error) {
	data, err := r.Body()
	if err != nil {
		return "", err
	}
	return string(data), nil
}

// ParseJSON will attempt to parse the request body as JSON
func (r *builtinRequest) ParseJSON(obj interface{}) error {
	data, err := r.Body()
	if err != nil {
		return err
	}
	return json.Unmarshal(data, obj)
}

// ParseXML will attempt to parse the request body as XML
func (r *builtinRequest) ParseXML(obj interface{}) error {
	data, err := r.Body()
	if err != nil {
		return err
	}
	return xml.Unmarshal(data, obj)
}

// HasContentType determines whether a request has a given mime type as its content type
func (r builtinRequest) HasContentType(mimetype string) bool {
	contentType := r.request.Header.Get("Content-Type")
	if contentType == "" {
		return mimetype == "application/octet-stream"
	}
	for _, v := range strings.Split(contentType, ",") {
		t, _, err := mime.ParseMediaType(v)
		if err != nil {
			break
		}
		if t == mimetype {
			return true
		}
	}
	return false
}

// NewRequest will create a new instance of a mojito request for the given http.Request object
func NewRequest(req *http.Request) Request {
	return &builtinRequest{
		req,
		make(map[string]string),
	}
}
