package helpers

import (
	"time"

	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/log"
	"github.com/go-mojito/mojito/pkg/logger"
)

// RequestLogger provides a simple middleware implementation that will log every request handled by mojito
func RequestLogger(ctx mojito.Context, next func() error) (err error) {
	var start = time.Now()
	err = next()
	log.Fields(logger.Fields{
		"ms":   time.Since(start).Milliseconds(),
		"path": ctx.Request().GetRequest().URL.Path,
	}).Info(ctx.Request().GetRequest().Method)
	return
}
