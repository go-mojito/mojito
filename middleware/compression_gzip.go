package middleware

import (
	"compress/gzip"
	"net/http"

	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/log"
)

func compressGzip(ctx mojito.Context, next func() error) error {
	originalWriter := ctx.Response().GetWriter()
	writer := &gzipWriter{
		ResponseWriter: originalWriter,
	}

	defer func() {
		if err := writer.Close(); err != nil {
			log.Error(err)
		}
		ctx.Response().SetWriter(originalWriter)
	}()

	ctx.Response().SetWriter(writer)

	return next()
}

// Lazy gzip writer because of https://github.com/golang/go/issues/16830
type gzipWriter struct {
	http.ResponseWriter
	writer *gzip.Writer
}

func (w *gzipWriter) Close() error {
	if w.writer == nil {
		return nil
	}

	return w.writer.Close()
}

func (g *gzipWriter) WriteString(s string) (int, error) {
	return g.Write([]byte(s))
}

func (g *gzipWriter) Write(data []byte) (int, error) {
	if g.writer == nil {
		g.ResponseWriter.Header().Set("Content-Encoding", "gzip")
		g.ResponseWriter.Header().Set("Vary", "Accept-Encoding")
		g.writer = gzip.NewWriter(g.ResponseWriter)
	}
	g.Header().Del("Content-Length")
	return g.writer.Write(data)
}

// Fix: https://github.com/mholt/caddy/issues/38
func (g *gzipWriter) WriteHeader(code int) {
	g.Header().Del("Content-Length")
	g.ResponseWriter.Header().Set("Content-Encoding", "gzip")
	g.ResponseWriter.Header().Set("Vary", "Accept-Encoding")
	g.ResponseWriter.WriteHeader(code)
}
