package websocket

import (
	"encoding/json"
	"reflect"

	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/pkg/router"
)

func init() {
	router.RegisterHandlerArgFactory[*ChannelContext](func(ctx router.Context, next router.HandlerFunc) reflect.Value {
		if webCtx, ok := ctx.(*ChannelContext); ok {
			return reflect.ValueOf(webCtx)
		}
		if webCtx, ok := ctx.(ChannelContext); ok {
			return reflect.ValueOf(&webCtx)
		}
		return reflect.ValueOf(nil)
	})
}

type ChannelContext struct {
	mojito.WebSocketContext

	Channel *string
	Payload json.RawMessage
}

func (ctx *ChannelContext) Read(out interface{}) error {
	return json.Unmarshal(ctx.Payload, out)
}

func (ctx *ChannelContext) Send(data interface{}) error {
	payload, err := json.Marshal(data)
	if err != nil {
		return err
	}
	return ctx.WebSocketContext.Send(&Message{
		Channel: ctx.Channel,
		Payload: json.RawMessage(payload),
	})
}
