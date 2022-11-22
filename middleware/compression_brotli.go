package middleware

import (
	"net/http"

	"github.com/andybalholm/brotli"
	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/log"
)

func compressBrotli(ctx mojito.Context, next func() error) (err error) {
	writer := brotli.NewWriter(ctx.Response().GetWriter())
	defer func() {
		if err := writer.Close(); err != nil {
			log.Error(err)
		}
	}()

	ctx.Response().Header().Set("Content-Encoding", "br")
	ctx.Response().Header().Set("Vary", "Accept-Encoding")
	ctx.Response().SetWriter(&brotliWriter{
		ResponseWriter: ctx.Response().GetWriter(),
		writer:         writer,
	})
	return next()
}

type brotliWriter struct {
	http.ResponseWriter
	writer *brotli.Writer
}

func (br *brotliWriter) WriteString(s string) (int, error) {
	return br.Write([]byte(s))
}

func (br *brotliWriter) Write(data []byte) (int, error) {
	br.Header().Del("Content-Length")
	return br.writer.Write(data)
}

// Fix: https://github.com/mholt/caddy/issues/38
func (br *brotliWriter) WriteHeader(code int) {
	br.Header().Del("Content-Length")
	br.ResponseWriter.WriteHeader(code)
}
