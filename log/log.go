package log

import (
	"io"

	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/pkg/logger"
)

// SetOutput sets the output destination for the logger
func SetOutput(w io.Writer) error {
	return mojito.DefaultLogger().SetOutput(w)
}

// Field will add a field to a new logger and return it
func Field(name string, val interface{}) mojito.Logger {
	return mojito.DefaultLogger().Field(name, val)
}

// Fields will add multiple fields to a new logger and return it
func Fields(fields logger.Fields) mojito.Logger {
	return mojito.DefaultLogger().Fields(fields)
}

// Trace will write a trace log
func Trace() mojito.Logger {
	return mojito.DefaultLogger().Trace()
}

// Debug will write a debug log
func Debug() mojito.Logger {
	return mojito.DefaultLogger().Debug()
}

// Info will write a info log
func Info() mojito.Logger {
	return mojito.DefaultLogger().Info()
}

// Warn will write a warn log
func Warn() mojito.Logger {
	return mojito.DefaultLogger().Warn()
}

// Error will write a error log
func Error() mojito.Logger {
	return mojito.DefaultLogger().Error()
}

// Fatal will write a fatal log
func Fatal() mojito.Logger {
	return mojito.DefaultLogger().Fatal()
}
