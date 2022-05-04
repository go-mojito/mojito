package mojito

import (
	"mime"
	"net/http"
	"reflect"
	"strings"

	"github.com/go-mojito/mojito/pkg/renderer"
	"github.com/go-mojito/mojito/pkg/router"
)

func init() {
	router.RegisterHandlerArgFactory[Request](func(ctx router.Context, next router.HandlerFunc) reflect.Value {
		var req Request = &compatRequest{
			context: ctx,
		}
		return reflect.ValueOf(req)
	})
	router.RegisterHandlerArgFactory[Response](func(ctx router.Context, next router.HandlerFunc) reflect.Value {
		var res Response = &compatResponse{
			context: NewRenderContext(ctx),
		}
		return reflect.ValueOf(res)
	})
}

type Request interface {
	// HasContentType determines whether a request has a given mime type as its content type
	HasContentType(mimetype string) bool

	// Param returns the route parameter or empty string if not found
	Param(name string) string

	// ParamOrDefault returns the route parameter or a custom default if not found
	ParamOrDefault(name string, def string) string

	// SetParams will set the routep params for this request
	SetParams(params map[string]string)

	// GetRequest returns the underlying http.Request object
	Request() *http.Request

	// Request replaces the underlying http.Request object
	SetRequest(req *http.Request)
}

type Response interface {
	http.ResponseWriter

	// Response is the mojito implementation of a response which wraps around a regular
	// http.ResponseWriter object
	JSON(body interface{}) error

	// PrettyJSON writes any object to the response body as pretty JSON
	PrettyJSON(body interface{}) error

	// GetWriter returns the underlying response writer instance
	Writer() http.ResponseWriter

	// SetWriter replaces the underlying response writer instance
	SetWriter(res http.ResponseWriter)

	// String will write a string to the response body
	String(body string) error

	// View will use the default renderer to load a view and render it
	// to the response body using the response object's ViewBag
	View(view string) error

	// ViewBag returns the ViewBag for this response
	ViewBag() renderer.ViewBag
}

/// Request Compat

// Request is the mojito implementation of a request which wraps around a
// regular http.Request object.
type compatRequest struct {
	context  router.Context
	metadata map[string]string
}

// HasContentType determines whether a request has a given mime type as its content type
func (r compatRequest) HasContentType(mimetype string) bool {
	contentType := r.context.Request().GetRequest().Header.Get("Content-Type")
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

// Metadata returns metadata for this request, if there is any
func (r compatRequest) Metadata(key string) string {
	if val, ok := r.metadata[key]; ok {
		return val
	}
	return ""
}

// Param returns the route parameter or empty string if not found
func (r compatRequest) Param(name string) string {
	return r.context.Request().Param(name)
}

// ParamOrDefault returns the route parameter or a custom default if not found
func (r compatRequest) ParamOrDefault(name string, def string) string {
	return r.context.Request().ParamOrDefault(name, def)
}

// Request returns the underlying http.Request object
func (r compatRequest) Request() *http.Request {
	return r.context.Request().GetRequest()
}

// SetMetadata will set the metadata value for a given key
func (r compatRequest) SetMetadata(key string, value string) {
	r.metadata[key] = value
}

func (r compatRequest) SetParams(params map[string]string) {
	r.context.Request().SetParams(params)
}

// Request replaces the underlying http.Request object
func (r compatRequest) SetRequest(req *http.Request) {
	r.context.Request().SetRequest(req)
}

/// Response Compat

// Response is the mojito implementation of a response which wraps around a regular
// http.ResponseWriter object
type compatResponse struct {
	context RendererContext
}

// JSON writes any object to the response body as JSON
func (r compatResponse) JSON(body interface{}) error {
	return r.context.JSON(body)
}

// PrettyJSON writes any object to the response body as pretty JSON
func (r compatResponse) PrettyJSON(body interface{}) error {
	return r.context.PrettyJSON(body)
}

// ResponseWriter returns the underlying response writer instance
func (r compatResponse) Writer() http.ResponseWriter {
	return r.context.Response().GetWriter()
}

// SetResponseWriter replaces the underlying response writer instance
func (r compatResponse) SetWriter(res http.ResponseWriter) {
	r.context.Response().SetWriter(res)
}

// String will write a string to the response body
func (r compatResponse) String(body string) error {
	return r.context.String(body)
}

// View will use the default renderer to load a view and render it
// to the response body using the response object's ViewBag
func (r compatResponse) View(view string) error {
	return r.context.View(view)
}

func (r compatResponse) Header() http.Header {
	return r.context.Response().Header()
}

func (r compatResponse) Write(b []byte) (int, error) {
	return r.context.Response().Write(b)
}

func (r compatResponse) WriteHeader(statusCode int) {
	r.context.Response().WriteHeader(statusCode)
}

// ViewBag returns the ViewBag for this response
func (r compatResponse) ViewBag() renderer.ViewBag {
	return r.context.ViewBag()
}
