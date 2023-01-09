package websocket

import (
	"encoding/json"
	"errors"
	"reflect"

	"github.com/go-mojito/mojito/pkg/router"
)

func init() {
	router.RegisterHandlerArgFactory[ChannelContext](func(ctx router.Context, next router.HandlerFunc) (reflect.Value, error) {
		if webCtx, ok := ctx.(*builtinChannelContext); ok {
			return reflect.ValueOf(webCtx), nil
		}
		if webCtx, ok := ctx.(builtinChannelContext); ok {
			return reflect.ValueOf(&webCtx), nil
		}
		return reflect.ValueOf(nil), errors.New("cannot convert context to websocket channel context")
	})
}

type builtinChannelContext struct {
	Context
	channel *string
	payload json.RawMessage
}

// Channel implements ChannelContext
func (ctx *builtinChannelContext) Channel() string {
	if ctx.channel == nil {
		return ""
	}
	return *ctx.channel
}

func (ctx *builtinChannelContext) Receive(out interface{}) error {
	return json.Unmarshal(ctx.payload, out)
}

func (ctx *builtinChannelContext) Send(data interface{}) error {
	payload, err := json.Marshal(data)
	if err != nil {
		return err
	}
	return ctx.Context.Send(&Message{
		Channel: ctx.channel,
		Payload: json.RawMessage(payload),
	})
}

func newChannelContext(ctx Context, channel *string, payload json.RawMessage) ChannelContext {
	return &builtinChannelContext{
		Context: ctx,
		channel: channel,
		payload: payload,
	}
}
