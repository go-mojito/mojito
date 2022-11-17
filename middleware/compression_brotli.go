package middleware

import (
	"fmt"
	"net/http"

	"github.com/andybalholm/brotli"
	"github.com/go-mojito/mojito"
)

func compressBrotli(ctx mojito.Context, next func() error) (err error) {
	writer := brotli.NewWriterOptions(ctx.Response().GetWriter(), brotli.WriterOptions{
		Quality: brotli.DefaultCompression,
	})

	ctx.Response().Header().Set("Content-Encoding", "br")
	ctx.Response().Header().Set("Vary", "Accept-Encoding")

	brotliWriter := &brotliWriter{
		ResponseWriter: ctx.Response().GetWriter(),
		writer:         writer,
	}
	ctx.Response().SetWriter(brotliWriter)

	defer func() {
		writer.Close()
		ctx.Response().Header().Set("Content-Length", fmt.Sprint(brotliWriter.size))
	}()

	return next()
}

type brotliWriter struct {
	size int
	http.ResponseWriter
	writer *brotli.Writer
}

func (br *brotliWriter) WriteString(s string) (int, error) {
	return br.Write([]byte(s))
}

func (br *brotliWriter) Write(data []byte) (int, error) {
	br.Header().Del("Content-Length")
	len, err := br.writer.Write(data)
	br.size += len
	return len, err
}

// Fix: https://github.com/mholt/caddy/issues/38
func (br *brotliWriter) WriteHeader(code int) {
	br.Header().Del("Content-Length")
	br.ResponseWriter.WriteHeader(code)
}
