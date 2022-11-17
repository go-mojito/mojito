package middleware

import (
	"strings"

	"github.com/go-mojito/mojito"
)

// Compression compresses the http response if supported by the client.
func Compression(ctx mojito.Context, next func() error) (err error) {
	if strings.Contains(ctx.Request().GetRequest().Header.Get("Connection"), "Upgrade") ||
		strings.Contains(ctx.Request().GetRequest().Header.Get("Accept"), "text/event-stream") {
		return next()
	}

	if strings.Contains(ctx.Request().GetRequest().Header.Get("Accept-Encoding"), "br") {
		return compressBrotli(ctx, next)
	} else if strings.Contains(ctx.Request().GetRequest().Header.Get("Accept-Encoding"), "gzip") {
		return compressGzip(ctx, next)
	}

	return next()
}
