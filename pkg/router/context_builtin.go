package router

import (
	"encoding/json"
	"net/http"

	"github.com/infinytum/structures"
)

type builtinContext struct {
	request  Request
	response Response

	metadata structures.Map[string, interface{}]
}

// Error implements Context
func (ctx *builtinContext) Error() error {
	panic("unimplemented")
}

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

	_, err = ctx.response.Write(data)
	return err
}

// PrettyJSON writes any object to the response body as pretty JSON
func (ctx *builtinContext) PrettyJSON(body interface{}) error {
	data, err := json.MarshalIndent(body, "", "  ")
	if err != nil {
		return err
	}

	_, err = ctx.response.Write(data)
	return err
}

// Metadata implements Context
func (ctx *builtinContext) Metadata() structures.Map[string, interface{}] {
	return ctx.metadata
}

// String will write a string to the response body
func (ctx *builtinContext) String(body string) error {
	_, err := ctx.response.Write([]byte(body))
	return err
}

func NewContextFromStdlib(w http.ResponseWriter, req *http.Request) *builtinContext {
	return NewContext(NewRequest(req), NewResponse(w))
}

func NewContext(req Request, res Response) *builtinContext {
	return &builtinContext{
		request:  req,
		response: res,
	}
}
