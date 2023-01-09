package websocket

import (
	"net/http"
	"reflect"

	"github.com/go-mojito/mojito/pkg/router"
	"github.com/gorilla/websocket"
)

func init() {
	router.RegisterStatefulHandlerArgFactory[Context](func(ctx router.Context, next router.HandlerFunc) (reflect.Value, error) {
		conn, err := upgrader.Upgrade(ctx.Response().GetWriter(), ctx.Request().GetRequest(), nil)
		if err != nil {
			return reflect.ValueOf(nil), err
		}
		return reflect.ValueOf(NewWebsocketContext(ctx, conn)), nil
	})
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// Context defines a context for websocket functionality.
type Context interface {
	router.Context
	EnableReadCheck()
	Receive(out interface{}) error
	Send(data interface{}) error
}

type ChannelContext interface {
	router.Context
	Channel() string
	Receive(out interface{}) error
	Send(data interface{}) error
}
