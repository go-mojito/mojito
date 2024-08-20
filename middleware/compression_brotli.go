package middleware

import (
	"net/http"

	"github.com/andybalholm/brotli"
	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/log"
)

func compressBrotli(ctx mojito.Context, next func() error) (err error) {
	originalWriter := ctx.Response().GetWriter()
	writer := brotli.NewWriter(originalWriter)
	defer func() {
		if err := writer.Close(); err != nil {
			log.Error().Msg(err)
		}
		ctx.Response().SetWriter(originalWriter)
	}()

	ctx.Response().SetWriter(&brotliWriter{
		ResponseWriter: ctx.Response().GetWriter(),
		writer:         writer,
	})

	return next()
}

type brotliWriter struct {
	http.ResponseWriter
	writer       *brotli.Writer
	wroteHeaders bool
}

func (br *brotliWriter) WriteString(s string) (int, error) {
	return br.Write([]byte(s))
}

func (br *brotliWriter) Write(data []byte) (int, error) {
	br.Header().Del("Content-Length")
	if !br.wroteHeaders {
		br.Header().Set("Content-Encoding", "br")
		br.Header().Set("Vary", "Accept-Encoding")
	}

	return br.writer.Write(data)
}

// Fix: https://github.com/mholt/caddy/issues/38
func (br *brotliWriter) WriteHeader(code int) {
	if !br.wroteHeaders {
		br.Header().Set("Content-Encoding", "br")
		br.Header().Set("Vary", "Accept-Encoding")
	}
	br.Header().Del("Content-Length")
	br.ResponseWriter.WriteHeader(code)
}
