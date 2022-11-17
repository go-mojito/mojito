package middleware

import (
	"compress/gzip"
	"fmt"
	"net/http"

	"github.com/go-mojito/mojito"
)

func compressGzip(ctx mojito.Context, next func() error) (err error) {
	writer := gzip.NewWriter(ctx.Response().GetWriter())
	ctx.Response().Header().Set("Content-Encoding", "gzip")
	ctx.Response().Header().Set("Vary", "Accept-Encoding")
	gzipWriter := &gzipWriter{
		ResponseWriter: ctx.Response().GetWriter(),
		writer:         writer,
	}
	ctx.Response().SetWriter(gzipWriter)
	defer func() {
		writer.Close()
		ctx.Response().Header().Set("Content-Length", fmt.Sprint(gzipWriter.size))
	}()
	return next()
}

type gzipWriter struct {
	http.ResponseWriter
	writer *gzip.Writer
	size   int
}

func (g *gzipWriter) WriteString(s string) (int, error) {
	return g.Write([]byte(s))
}

func (g *gzipWriter) Write(data []byte) (int, error) {
	g.Header().Del("Content-Length")
	len, err := g.writer.Write(data)
	g.size += len
	return len, err
}

// Fix: https://github.com/mholt/caddy/issues/38
func (g *gzipWriter) WriteHeader(code int) {
	g.Header().Del("Content-Length")
	g.ResponseWriter.WriteHeader(code)
}
