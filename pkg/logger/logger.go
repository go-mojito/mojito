package logger

import "io"

// Logger defines the interface of a mojito compatible logger implementation
type Logger interface {
	// OutSetOutputput sets the output destination for the logger
	SetOutput(w io.Writer)
	// Field will add a field to a new logger and return it
	Field(name string, val interface{}) Logger
	// Fields will add multiple fields to a new logger and return it
	Fields(fields Fields) Logger
	// Debug will write a debug log
	Debug(msg interface{})
	// Debugf will write a debug log sprintf-style
	Debugf(msg string, values ...interface{})
	// Error will write a error log
	Error(msg interface{})
	// Errorf will write a error log sprintf-style
	Errorf(msg string, values ...interface{})
	// Fatal will write a fatal log
	Fatal(msg interface{})
	// Fatalf will write a fatal log sprintf-style
	Fatalf(msg string, values ...interface{})
	// Info will write a info log
	Info(msg interface{})
	// Infof will write a info log sprintf-style
	Infof(msg string, values ...interface{})
	// Trace will write a trace log
	Trace(msg interface{})
	// Tracef will write a trace log sprintf-style
	Tracef(msg string, values ...interface{})
	// Warn will write a warn log
	Warn(msg interface{})
	// Warnf will write a warn log sprintf-style
	Warnf(msg string, values ...interface{})
}
