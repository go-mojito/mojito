package stdlib

import (
	"context"
	"fmt"
	"io"
	"log/slog"

	"github.com/go-mojito/mojito/pkg/logger"
)

type Logger struct {
	logger   *slog.Logger
	msgLevel slog.Level
}

// SetOutput sets the output destination for the logger
func (z *Logger) SetOutput(w io.Writer) error {
	z.logger = slog.New(slog.NewTextHandler(w, nil))
	return nil
}

// Field will add a field to a new logger and return it
func (z *Logger) Field(name string, val interface{}) logger.Logger {
	return z.Fields(logger.Fields{name: val})
}

// Fields will add multiple fields to a new logger and return it
func (z *Logger) Fields(fields logger.Fields) logger.Logger {
	logger := z.logger
	for name, val := range fields {
		logger = logger.With(name, val)
	}
	return &Logger{
		logger:   logger,
		msgLevel: z.msgLevel,
	}
}

// Trace sets the log level to TRACE
func (z *Logger) Trace() logger.Logger {
	return &Logger{
		logger:   z.logger,
		msgLevel: slog.LevelDebug - 2,
	}
}

// Debug sets the log level to DEBUG
func (z *Logger) Debug() logger.Logger {
	return &Logger{
		logger:   z.logger,
		msgLevel: slog.LevelDebug,
	}
}

// Info sets the log level to INFO
func (z *Logger) Info() logger.Logger {
	return &Logger{
		logger:   z.logger,
		msgLevel: slog.LevelInfo,
	}
}

// Warn sets the log level to WARN
func (z *Logger) Warn() logger.Logger {
	return &Logger{
		logger:   z.logger,
		msgLevel: slog.LevelWarn,
	}
}

// Error sets the log level to ERROR
func (z *Logger) Error() logger.Logger {
	return &Logger{
		logger:   z.logger,
		msgLevel: slog.LevelError,
	}
}

// Fatal sets the log level to FATAL
func (z *Logger) Fatal() logger.Logger {
	return &Logger{
		logger:   z.logger,
		msgLevel: slog.LevelError + 2,
	}
}

// Msg will write the log message
func (z *Logger) Msg(msg interface{}) {
	z.Msgf(fmt.Sprintf("%v", msg))
}

// Msgf will write the log message sprintf-style
func (z *Logger) Msgf(msg string, values ...interface{}) {
	z.logger.Log(context.Background(), z.msgLevel, msg, values...)
	if z.msgLevel == slog.LevelError+2 {
		panic(msg)
	}
}

// NewLogger will create a new instance of the mojito builtin logger implementation
func NewLogger() logger.Logger {
	return &Logger{
		logger:   slog.Default(),
		msgLevel: slog.LevelInfo,
	}
}
