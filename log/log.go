package log

import (
	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/pkg/logger"
)

// Debug will write a debug log
func Debug(msg interface{}) {
	mojito.DefaultLogger().Debug(msg)
}

// Debugf will write a debug log sprintf-style
func Debugf(msg string, values ...interface{}) {
	mojito.DefaultLogger().Debugf(msg, values...)
}

// Error will write a error log
func Error(msg interface{}) {
	mojito.DefaultLogger().Error(msg)
}

// Errorf will write a error log sprintf-style
func Errorf(msg string, values ...interface{}) {
	mojito.DefaultLogger().Errorf(msg, values...)
}

// Fatal will write a fatal log
func Fatal(msg interface{}) {
	mojito.DefaultLogger().Fatal(msg)
}

// Fatalf will write a fatal log sprintf-style
func Fatalf(msg string, values ...interface{}) {
	mojito.DefaultLogger().Fatalf(msg, values...)
}

// Field will add a field to a new logger and return it
func Field(name string, val interface{}) mojito.Logger {
	return mojito.DefaultLogger().Field(name, val)
}

// Fields will add multiple fields to a new logger and return it
func Fields(fields logger.Fields) mojito.Logger {
	return mojito.DefaultLogger().Fields(fields)
}

// Info will write a info log
func Info(msg interface{}) {
	mojito.DefaultLogger().Info(msg)
}

// Infof will write a info log sprintf-style
func Infof(msg string, values ...interface{}) {
	mojito.DefaultLogger().Infof(msg, values...)
}

// Trace will write a trace log
func Trace(msg interface{}) {
	mojito.DefaultLogger().Trace(msg)
}

// Tracef will write a trace log sprintf-style
func Tracef(msg string, values ...interface{}) {
	mojito.DefaultLogger().Tracef(msg, values...)
}

// Warn will write a warn log
func Warn(msg interface{}) {
	mojito.DefaultLogger().Warn(msg)
}

// Warnf will write a warn log sprintf-style
func Warnf(msg string, values ...interface{}) {
	mojito.DefaultLogger().Warnf(msg, values...)
}
