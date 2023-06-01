package middleware

import (
	"strings"

	"github.com/go-mojito/mojito"
)

// Compression compresses the http response if supported by the client.
func Compression(ctx mojito.Context, next func() error) (err error) {
	if strings.Contains(ctx.Request().Header("Connection"), "Upgrade") ||
		strings.Contains(ctx.Request().Header("Accept"), "text/event-stream") {
		return next()
	}

	// Brotli compression is favored over gzip compression.
	if strings.Contains(ctx.Request().Header("Accept-Encoding"), "br") {
		return compressBrotli(ctx, next)
	}

	// Gzip compression is favored over deflate compression.
	if strings.Contains(ctx.Request().Header("Accept-Encoding"), "gzip") {
		return compressGzip(ctx, next)
	}

	// Deflate compression is favored over identity compression.
	// TODO: Deflate compression

	// Identity compression is the default.
	// TODO: Identity compression

	return next()
}
