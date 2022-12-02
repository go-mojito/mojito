package router

import (
	"context"
	"encoding/json"
	"encoding/xml"
	"net/http"
	"time"

	"github.com/infinytum/structures"
)

type builtinContext struct {
	request  Request
	response Response

	doneError error
	doneChan  chan struct{}

	metadata structures.Map[string, interface{}]
}

/// Request and response functions

// Request implements Context
func (ctx *builtinContext) Request() Request {
	return ctx.request
}

// Response implements Context
func (ctx *builtinContext) Response() Response {
	return ctx.response
}

/// Assistive functions

// JSON writes any object to the response body as JSON
func (ctx *builtinContext) JSON(body interface{}) error {
	data, err := json.Marshal(body)
	if err != nil {
		return err
	}

	ctx.Response().Header().Set("Content-Type", "application/json")
	_, err = ctx.response.Write(data)
	return err
}

// PrettyJSON writes any object to the response body as pretty JSON
func (ctx *builtinContext) PrettyJSON(body interface{}) error {
	data, err := json.MarshalIndent(body, "", "  ")
	if err != nil {
		return err
	}

	ctx.Response().Header().Set("Content-Type", "application/json")
	_, err = ctx.response.Write(data)
	return err
}

// Metadata implements Context
func (ctx *builtinContext) Metadata() structures.Map[string, interface{}] {
	return ctx.metadata
}

// ReadJSON reads the request body as JSON and unmarshals it into the given object
func (ctx *builtinContext) ReadJSON(obj interface{}) error {
	return json.NewDecoder(ctx.request.GetRequest().Body).Decode(obj)
}

// ReadXML reads the request body as XML and unmarshals it into the given object
func (ctx *builtinContext) ReadXML(obj interface{}) error {
	return xml.NewDecoder(ctx.request.GetRequest().Body).Decode(obj)
}

// String will write a string to the response body
func (ctx *builtinContext) String(body string) error {
	_, err := ctx.response.Write([]byte(body))
	return err
}

/// context.Context functions

// Deadline implements context.Context
func (*builtinContext) Deadline() (deadline time.Time, ok bool) {
	return time.Time{}, false
}

// Done implements context.Context
func (ctx *builtinContext) Done() <-chan struct{} {
	return ctx.doneChan
}

// Err implements context.Context
func (ctx *builtinContext) Err() error {
	return ctx.doneError
}

// Value implements context.Context
func (ctx *builtinContext) Value(key any) any {
	return nil
}

func (ctx *builtinContext) cancelFunc() {
	ctx.doneError = context.Canceled
	close(ctx.doneChan)
}

func NewContextFromStdlib(w http.ResponseWriter, req *http.Request) (*builtinContext, context.CancelFunc) {
	return NewContext(NewRequest(req), NewResponse(w))
}

func NewContext(req Request, res Response) (*builtinContext, context.CancelFunc) {
	ctx := &builtinContext{
		request:  req,
		response: res,
		doneChan: make(chan struct{}),
		metadata: structures.NewMap[string, interface{}](),
	}
	return ctx, ctx.cancelFunc
}
