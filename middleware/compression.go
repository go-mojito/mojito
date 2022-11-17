package middleware

import (
	"github.com/andybalholm/brotli"
	"github.com/go-mojito/mojito"
)

// Compression compresses the http response if supported by the client.
func Compression(ctx mojito.Context, next func() error) (err error) {
	err = next()
	brotli.HTTPCompressor(ctx.Response(), ctx.Request().GetRequest())
	return err
}
