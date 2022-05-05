package stdlib

import (
	"fmt"
	"log"
	"os"

	"github.com/go-mojito/mojito/pkg/logger"
)

type Logger struct {
	fields logger.Fields
}

// Field will add a field to a new logger and return it
func (z *Logger) Field(name string, val interface{}) logger.Logger {
	return z.Fields(logger.Fields{name: val})
}

// Fields will add multiple fields to a new logger and return it
func (z *Logger) Fields(fields logger.Fields) logger.Logger {
	newLog := &Logger{
		fields: z.fields.Clone(),
	}
	for name, val := range fields {
		newLog.fields[name] = val
	}
	return newLog
}

// Debug will write a debug log
func (z *Logger) Debug(msg interface{}) {
	z.log(msg, "DEBUG")
}

// Debugf will write a debug log sprintf-style
func (z *Logger) Debugf(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Debug(msg)
}

// Error will write a error log
func (z *Logger) Error(msg interface{}) {
	z.log(msg, "ERROR")
}

// Errorf will write a error log sprintf-style
func (z *Logger) Errorf(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Error(msg)
}

// Fatal will write a fatal log
func (z *Logger) Fatal(msg interface{}) {
	z.log(msg, "FATAL")
	os.Exit(1)
}

// Fatalf will write a fatal log sprintf-style
func (z *Logger) Fatalf(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Fatal(msg)
}

// Info will write a info log
func (z *Logger) Info(msg interface{}) {
	z.log(msg, "INFO")
}

// Infof will write a info log sprintf-style
func (z *Logger) Infof(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Info(msg)
}

// Trace will write a trace log
func (z *Logger) Trace(msg interface{}) {
	z.log(msg, "TRACE")
}

// Tracef will write a trace log sprintf-style
func (z *Logger) Tracef(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Trace(msg)
}

// Warn will write a warn log
func (z *Logger) Warn(msg interface{}) {
	z.log(msg, "WARN")
}

// Warnf will write a warn log sprintf-style
func (z *Logger) Warnf(msg string, values ...interface{}) {
	msg = fmt.Sprintf(msg, values...)
	z.Warn(msg)
}

func (z *Logger) log(msg interface{}, level string) {
	fields := ""
	for name, val := range z.fields {
		fields += fmt.Sprintf("%s='%s' ", name, fmt.Sprint(val))
	}
	fields += fmt.Sprint(msg)
	log.Printf("[%s] %s", level, fields)
}

// newBuiltinLogger will create a new instance of the mojito builtin logger implementation
func NewLogger() logger.Logger {
	return &Logger{
		fields: make(logger.Fields),
	}
}
