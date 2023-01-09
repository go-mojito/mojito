package mojito

import (
	"github.com/go-mojito/mojito/pkg/router"
)

type mojitoContext struct {
	router.Context
}

// JSON implements Context
func (ctx *mojitoContext) JSON(body interface{}) error {
	return ctx.Response().WriteJSON(body, false)
}

// PrettyJSON implements Context
func (ctx *mojitoContext) PrettyJSON(body interface{}) error {
	return ctx.Response().WriteJSON(body, true)
}

// ReadJSON implements Context
func (ctx *mojitoContext) ReadJSON(obj interface{}) error {
	return ctx.Request().ParseJSON(obj)
}

// ReadXML implements Context
func (ctx *mojitoContext) ReadXML(obj interface{}) error {
	return ctx.Request().ParseXML(obj)
}

// String will write a string to the response body
func (ctx *mojitoContext) String(body string) error {
	return ctx.Response().WriteString(body)
}

func newMojitoContext(ctx router.Context) Context {
	return &mojitoContext{
		Context: ctx,
	}
}
