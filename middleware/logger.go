package middleware

import (
	"time"

	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/log"
	"github.com/go-mojito/mojito/pkg/logger"
)

// Logging provides a simple middleware implementation that will log every request handled by mojito
func Logging(ctx mojito.Context, next func() error) (err error) {
	var start = time.Now()
	err = next()
	go log.Fields(logger.Fields{
		"method": ctx.Request().GetRequest().Method,
		"ms":     time.Since(start).Milliseconds(),
	}).Info(ctx.Request().GetRequest().URL.Path)
	return err
}

// RequestLogger provides a simple middleware implementation that will log every request handled by mojito
// Deprecated: use middleware.Logging instead
func RequestLogger(ctx mojito.Context, next func() error) (err error) {
	return Logging(ctx, next)
}
