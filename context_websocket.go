package mojito

import (
	"reflect"

	"github.com/go-mojito/mojito/pkg/router"
	"golang.org/x/net/websocket"
)

type builtinWebSocketContext struct {
	router.Context
	conn *websocket.Conn

	closed bool
}

func (ctx *builtinWebSocketContext) Closed() bool {
	return ctx.closed
}

func (ctx *builtinWebSocketContext) Receive(out interface{}) (err error) {
	outType := reflect.TypeOf(out)
	for outType != nil && outType.Kind() == reflect.Pointer {
		outType = outType.Elem()
	}

	if outType == nil || outType.Kind() == reflect.Struct || outType.Kind() == reflect.Interface || outType.Kind() == reflect.Map {
		err = websocket.JSON.Receive(ctx.conn, out)
	} else {
		err = websocket.Message.Receive(ctx.conn, out)
	}
	if err != nil && err.Error() == "EOF" {
		ctx.closed = true
	}
	return
}

func (ctx *builtinWebSocketContext) Send(data interface{}) (err error) {
	dataType := reflect.TypeOf(data)
	for dataType != nil && dataType.Kind() == reflect.Pointer {
		dataType = dataType.Elem()
	}

	if dataType == nil || dataType.Kind() == reflect.Struct || dataType.Kind() == reflect.Interface || dataType.Kind() == reflect.Map {
		err = websocket.JSON.Send(ctx.conn, data)
	} else {
		err = websocket.Message.Send(ctx.conn, data)
	}
	if err != nil && err.Error() == "EOF" {
		ctx.closed = true
	}
	return
}

func NewWebsocketContext(ctx router.Context, conn *websocket.Conn) WebSocketContext {
	ctx2 := &builtinWebSocketContext{
		Context: ctx,
		conn:    conn,
	}

	// Function that will ensure the closed status is set when the connection is closed by the client
	go func() {
		for {
			if _, err := conn.Read(make([]byte, 0)); err != nil && err.Error() == "EOF" && !ctx2.closed {
				ctx2.closed = true
				return
			}
		}
	}()
	return ctx2
}
