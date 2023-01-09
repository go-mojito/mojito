package websocket

import (
	"encoding/json"

	"github.com/go-mojito/mojito/log"
	"github.com/go-mojito/mojito/pkg/router"
	"github.com/gorilla/websocket"
	"github.com/infinytum/structures"
)

type Message struct {
	Channel *string         `json:"channel"`
	Error   string          `json:"error,omitempty"`
	Payload json.RawMessage `json:"payload"`
}

type WebSocket struct {
	channels structures.Map[string, func(ctx Context, handlerCtx router.Context)]
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
	if err := ws.channels.Set(name, func(ctx Context, handlerCtx router.Context) {
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
	if err := ws.channels.Set(name, func(ctx Context, handlerCtx router.Context) {
		go callHandler(h, ctx, handlerCtx)
	}); err != nil {
		log.
			Field("state", "with_async_channel").
			Error(err)
	}
	return ws
}

func (ws *WebSocket) handleMessage(ctx Context, msg Message) error {
	channelCtx := newChannelContext(ctx, msg.Channel, msg.Payload)

	// Handle unknown / catch all channels
	if msg.Channel == nil || !ws.channels.Contains(*msg.Channel) {
		if ws.catchAll == nil {
			return ctx.Send(Message{
				Error: "this channel does not exist",
			})
		} else if err := ws.catchAll.HandlerFunc()(channelCtx); err != nil {
			return ctx.Send(Message{
				Error: err.Error(),
			})
		}
		return nil
	}

	channel, err := ws.channels.Get(*msg.Channel)
	if err != nil {
		return ctx.Send(Message{
			Error: err.Error(),
		})
	}
	channel(ctx, channelCtx)
	return nil
}

func (ws *WebSocket) ToHandler() interface{} {
	return func(ctx Context) {
		for {
			select {
			case <-ctx.Done():
				return
			case msg, ok := <-receiverChannel(ctx):
				if !ok {
					return
				}
				if err := ws.handleMessage(ctx, msg); err != nil {
					log.
						Field("remote", ctx.Request().GetRequest().RemoteAddr).
						Field("state", "sending").
						Error(err)
				}
			}
		}
	}
}

func receiverChannel(ctx Context) chan Message {
	ch := make(chan Message, 1)
	go func(ctx Context) {
		var message Message
		if err := ctx.Receive(&message); err != nil {
			if _, ok := err.(*websocket.CloseError); !ok {
				log.
					Field("remote", ctx.Request().GetRequest().RemoteAddr).
					Field("state", "receiving").
					Error(err)
			}
			close(ch)
			return
		}
		ch <- message
		close(ch)
	}(ctx)
	return ch
}

func callHandler(h router.Handler, ctx Context, handlerCtx router.Context) {
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
		channels: structures.NewMap[string, func(ctx Context, handlerCtx router.Context)](),
	}
}
