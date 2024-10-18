package log

import (
	"github.com/go-mojito/mojito"
)

// Field will add a field to a new logger and return it
func With(args ...any) mojito.Logger {
	return mojito.DefaultLogger().With(args...)
}

// Debug will write a debug log
func Debug(msg string, values ...any) {
	mojito.DefaultLogger().Debug(msg, values...)
}

// Info will write a info log
func Info(msg string, values ...any) {
	mojito.DefaultLogger().Info(msg, values...)
}

// Warn will write a warn log
func Warn(msg string, values ...any) {
	mojito.DefaultLogger().Warn(msg, values...)
}

// Error will write a error log
func Error(msg string, values ...any) {
	mojito.DefaultLogger().Error(msg, values...)
}

// Fatal will write a fatal log
func Fatal(msg string, values ...any) {
	mojito.DefaultLogger().Error(msg, values...)
	panic(msg)
}
