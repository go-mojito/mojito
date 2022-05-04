package stdlib

import (
	"fmt"
	"log"
	"os"

	"github.com/go-mojito/mojito/pkg/logger"
)

type BuiltinLogger struct {
	fields logger.Fields
}

// Field will add a field to a new logger and return it
func (z *BuiltinLogger) Field(name string, val interface{}) logger.Logger {
	return z.Fields(logger.Fields{name: val})
}

// Fields will add multiple fields to a new logger and return it
func (z *BuiltinLogger) Fields(fields logger.Fields) logger.Logger {
	newLog := &BuiltinLogger{
		fields: z.fields.Clone(),
	}
	for name, val := range fields {
		newLog.fields[name] = val
	}
	return newLog
}

// Debug will write a debug log
func (z *BuiltinLogger) Debug(msg interface{}) {
	z.log(msg, "DEBUG")
}

// Debugf will write a debug log sprintf-style
func (z *BuiltinLogger) Debugf(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Debug(msg)
}

// Error will write a error log
func (z *BuiltinLogger) Error(msg interface{}) {
	z.log(msg, "ERROR")
}

// Errorf will write a error log sprintf-style
func (z *BuiltinLogger) Errorf(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Error(msg)
}

// Fatal will write a fatal log
func (z *BuiltinLogger) Fatal(msg interface{}) {
	z.log(msg, "FATAL")
	os.Exit(1)
}

// Fatalf will write a fatal log sprintf-style
func (z *BuiltinLogger) Fatalf(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Fatal(msg)
}

// Info will write a info log
func (z *BuiltinLogger) Info(msg interface{}) {
	z.log(msg, "INFO")
}

// Infof will write a info log sprintf-style
func (z *BuiltinLogger) Infof(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Info(msg)
}

// Trace will write a trace log
func (z *BuiltinLogger) Trace(msg interface{}) {
	z.log(msg, "TRACE")
}

// Tracef will write a trace log sprintf-style
func (z *BuiltinLogger) Tracef(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Trace(msg)
}

// Warn will write a warn log
func (z *BuiltinLogger) Warn(msg interface{}) {
	z.log(msg, "WARN")
}

// Warnf will write a warn log sprintf-style
func (z *BuiltinLogger) Warnf(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Warn(msg)
}

func (z *BuiltinLogger) log(msg interface{}, level string) {
	fields := ""
	for name, val := range z.fields {
		fields += fmt.Sprintf("%s='%s' ", name, fmt.Sprint(val))
	}
	fields += fmt.Sprint(msg)
	log.Printf("[%s] %s", level, fields)
}

// newBuiltinLogger will create a new instance of the mojito builtin logger implementation
func NewLogger() logger.Logger {
	return &BuiltinLogger{
		fields: make(logger.Fields),
	}
}
