package router

import (
	"context"
	"net/http"

	"github.com/infinytum/structures"
)

type builtinContext struct {
	context.Context
	metadata structures.Map[string, interface{}]
	request  Request
	response Response

	cancelCause error
}

func (ctx *builtinContext) Err() error {
	if ctx.cancelCause != nil {
		return ctx.cancelCause
	}
	return ctx.Context.Err()
}

// Metadata implements Context
func (ctx *builtinContext) Metadata() structures.Map[string, interface{}] {
	return ctx.metadata
}

// Request implements Context
func (ctx builtinContext) Request() Request {
	return ctx.request
}

// Response implements Context
func (ctx builtinContext) Response() Response {
	return ctx.response
}

// SetValue modifies the context with a new value
func (ctx *builtinContext) SetValue(key any, val any) {
	ctx.Context = context.WithValue(ctx.Context, key, val)
}

func NewContextFromStdlib(w http.ResponseWriter, req *http.Request) (Context, func(cause error)) {
	return NewContext(NewRequest(req), NewResponse(w))
}

func NewContext(req Request, res Response) (Context, func(cause error)) {
	parentCtx, cancel := context.WithCancel(context.Background())
	ctx := &builtinContext{
		Context:  parentCtx,
		metadata: structures.NewMap[string, interface{}](),
		request:  req,
		response: res,
	}
	return ctx, func(cause error) {
		ctx.cancelCause = cause
		cancel()
	}
}
