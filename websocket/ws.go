package websocket

import (
	"encoding/json"

	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/log"
	"github.com/go-mojito/mojito/pkg/router"
	"github.com/infinytum/structures"
)

type Message struct {
	Channel *string         `json:"channel"`
	Error   string          `json:"error,omitempty"`
	Payload json.RawMessage `json:"payload"`
}

type WebSocket struct {
	channels structures.Map[string, func(ctx mojito.WebSocketContext, handlerCtx router.Context)]
	catchAll router.Handler
}

func (ws *WebSocket) WithCatchAll(handler interface{}) *WebSocket {
	h, err := router.NewHandler(handler)
	if err != nil {
		panic(err)
	}
	ws.catchAll = h
	return ws
}

func (ws *WebSocket) WithChannel(name string, handler interface{}) *WebSocket {
	h, err := router.NewHandler(handler)
	if err != nil {
		panic(err)
	}
	if err := ws.channels.Set(name, func(ctx mojito.WebSocketContext, handlerCtx router.Context) {
		callHandler(h, ctx, handlerCtx)
	}); err != nil {
		log.
			Field("state", "with_channel").
			Error(err)
	}
	return ws
}

func (ws *WebSocket) WithAsyncChannel(name string, handler interface{}) *WebSocket {
	h, err := router.NewHandler(handler)
	if err != nil {
		panic(err)
	}
	if err := ws.channels.Set(name, func(ctx mojito.WebSocketContext, handlerCtx router.Context) {
		go callHandler(h, ctx, handlerCtx)
	}); err != nil {
		log.
			Field("state", "with_async_channel").
			Error(err)
	}
	return ws
}

func (ws *WebSocket) ToHandler() interface{} {
	return func(ctx mojito.WebSocketContext) {
		for !ctx.Closed() {
			var message Message
			if err := ctx.Receive(&message); err != nil {
				if err := ctx.Send(Message{
					Error: err.Error(),
				}); err != nil {
					log.
						Field("remote", ctx.Request().GetRequest().RemoteAddr).
						Field("state", "receiving").
						Error(err)
				}
				continue
			}

			channelCtx := &ChannelContext{
				WebSocketContext: ctx,
				Channel:          message.Channel,
				Payload:          message.Payload,
			}

			if message.Channel == nil || !ws.channels.Contains(*message.Channel) {
				var sendErr error
				if ws.catchAll == nil {
					sendErr = ctx.Send(Message{
						Error: "this channel does not exist",
					})
				} else if err := ws.catchAll.HandlerFunc()(channelCtx); err != nil {
					sendErr = ctx.Send(Message{
						Error: err.Error(),
					})
				}
				if sendErr != nil {
					log.
						Field("remote", ctx.Request().GetRequest().RemoteAddr).
						Field("state", "sending").
						Error(sendErr)
				}
				continue
			}

			channel, err := ws.channels.Get(*message.Channel)
			if err != nil {
				if err := ctx.Send(Message{
					Error: err.Error(),
				}); err != nil {
					log.
						Field("remote", ctx.Request().GetRequest().RemoteAddr).
						Field("state", "sending").
						Error(err)
				}
				continue
			}
			channel(ctx, channelCtx)
		}
	}
}

func callHandler(h router.Handler, ctx mojito.WebSocketContext, handlerCtx router.Context) {
	if err := h.HandlerFunc()(handlerCtx); err != nil {
		if err := ctx.Send(Message{
			Error: err.Error(),
		}); err != nil {
			log.
				Field("remote", ctx.Request().GetRequest().RemoteAddr).
				Field("state", "sending").
				Error(err)
		}
	}
}

func New() *WebSocket {
	return &WebSocket{
		channels: structures.NewMap[string, func(ctx mojito.WebSocketContext, handlerCtx router.Context)](),
	}
}
