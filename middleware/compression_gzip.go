package middleware

import (
	"compress/gzip"
	"net/http"

	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/log"
)

func compressGzip(ctx mojito.Context, next func() error) (err error) {
	writer := gzip.NewWriter(ctx.Response().GetWriter())
	defer func() {
		if err := writer.Close(); err != nil {
			log.Error(err)
		}
	}()

	ctx.Response().Header().Set("Content-Encoding", "gzip")
	ctx.Response().Header().Set("Vary", "Accept-Encoding")
	ctx.Response().SetWriter(&gzipWriter{
		ResponseWriter: ctx.Response().GetWriter(),
		writer:         writer,
	})
	return next()
}

type gzipWriter struct {
	http.ResponseWriter
	writer *gzip.Writer
}

func (g *gzipWriter) WriteString(s string) (int, error) {
	return g.Write([]byte(s))
}

func (g *gzipWriter) Write(data []byte) (int, error) {
	g.Header().Del("Content-Length")
	return g.writer.Write(data)
}

// Fix: https://github.com/mholt/caddy/issues/38
func (g *gzipWriter) WriteHeader(code int) {
	g.Header().Del("Content-Length")
	g.ResponseWriter.WriteHeader(code)
}
