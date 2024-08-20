package websocket

import (
	"errors"
	"io"
	"reflect"

	"github.com/go-mojito/mojito/log"
	"github.com/go-mojito/mojito/pkg/router"
	"github.com/gorilla/websocket"
)

type builtinContext struct {
	router.Context
	conn *websocket.Conn

	closed bool
}

// Response implements WebSocketContext
func (*builtinContext) Response() router.Response {
	log.Warn().Msg("Response() is not supported for WebSockets as the raw connection is managed by the server")
	return nil
}

// String implements WebSocketContext
func (ctx *builtinContext) String(body string) error {
	return ctx.conn.WriteMessage(websocket.TextMessage, []byte(body))
}

func (ctx *builtinContext) Closed() bool {
	return ctx.closed
}

func (ctx *builtinContext) close() {
	ctx.closed = true
	if err := ctx.conn.Close(); err != nil {
		log.Error().Msgf("Error while closing websocket connection: %v", err)
	}
}

// EnableReadCheck will enable a function that will ensure the closed status is set when the connection is closed by the client
// by continuously attempting to read on the channel. This is helpful for when you are only interested in sending on your socket.
// DO NOT ENABLE THIS WHEN YOU WANT TO READ, YOU WILL LOOSE INCOMING DATA!
func (ctx *builtinContext) EnableReadCheck() {
	go func() {
		for {
			if _, err := ctx.conn.UnderlyingConn().Read(make([]byte, 1)); err != nil && err == io.EOF && !ctx.closed {
				ctx.close()
				return
			}
			if ctx.closed {
				return
			}
		}
	}()
}

func (ctx *builtinContext) Receive(out interface{}) (err error) {
	if ctx.closed {
		return io.ErrClosedPipe
	}

	outType := reflect.TypeOf(out)
	valType := reflect.ValueOf(out)
	for outType != nil && outType.Kind() == reflect.Pointer {
		outType = outType.Elem()
		valType = valType.Elem()
	}

	if outType == nil || outType.Kind() == reflect.Struct || outType.Kind() == reflect.Interface || outType.Kind() == reflect.Map {
		err = ctx.conn.ReadJSON(out)
	} else if outType.AssignableTo(reflect.TypeOf([]byte(""))) {
		_, data, err2 := ctx.conn.ReadMessage()
		valType.SetBytes(data)
		err = err2
	} else if outType.AssignableTo(reflect.TypeOf("")) {
		_, data, err2 := ctx.conn.ReadMessage()
		valType.SetString(string(data))
		err = err2
	} else {
		err = errors.New("unsupported target type, must be struct, interface, map or byte array")
		return
	}

	// Close connection since read underneath failed
	if err != nil {
		ctx.close()
	}
	return
}

func (ctx *builtinContext) Send(data interface{}) (err error) {
	if ctx.closed {
		return io.ErrClosedPipe
	}

	dataType := reflect.TypeOf(data)
	for dataType != nil && dataType.Kind() == reflect.Pointer {
		dataType = dataType.Elem()
	}

	if dataType == nil || dataType.Kind() == reflect.Struct || dataType.Kind() == reflect.Interface || dataType.Kind() == reflect.Map {
		err = ctx.conn.WriteJSON(data)
	} else if dataType.AssignableTo(reflect.TypeOf([]byte{})) {
		err = ctx.conn.WriteMessage(websocket.BinaryMessage, data.([]byte))
	} else if dataType.AssignableTo(reflect.TypeOf("")) {
		err = ctx.conn.WriteMessage(websocket.TextMessage, []byte(data.(string)))
	} else {
		err = errors.New("unsupported data type")
	}

	// Close connection since send underneath failed
	if err != nil {
		ctx.close()
	}
	return
}

func NewWebsocketContext(ctx router.Context, conn *websocket.Conn) Context {
	newCtx := &builtinContext{
		Context: ctx,
		conn:    conn,
	}

	conn.SetCloseHandler(func(code int, text string) error {
		newCtx.closed = true
		return nil
	})

	return newCtx
}
