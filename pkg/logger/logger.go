package logger

import "io"

// Logger defines the interface of a mojito compatible logger implementation
type Logger interface {
	// OutSetOutputput sets the output destination for the logger
	SetOutput(w io.Writer) error

	// Field will add a field to a new logger and return it
	Field(name string, val interface{}) Logger
	// Fields will add multiple fields to a new logger and return it
	Fields(fields Fields) Logger

	// Trace sets the log level to TRACE
	Trace() Logger
	// Debug sets the log level to DEBUG
	Debug() Logger
	// Info sets the log level to INFO
	Info() Logger
	// Warn sets the log level to WARN
	Warn() Logger
	// Error sets the log level to ERROR
	Error() Logger
	// Fatal sets the log level to FATAL
	Fatal() Logger

	// Msg will write the log message
	Msg(msg interface{})
	// Msgf will write the log message sprintf-style
	Msgf(msg string, values ...interface{})
}
