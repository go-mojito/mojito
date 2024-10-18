package mojito

import (
	"context"
	"log/slog"

	"github.com/go-mojito/mojito/pkg/cache"
	"github.com/go-mojito/mojito/pkg/renderer"
	"github.com/go-mojito/mojito/pkg/router"
)

// Cache defines the minimum API surface for a valid mojito cache
type Cache interface {
	cache.Cache
}

// Logger defines the interface of a mojito compatible logger implementation
type Logger interface {
	// Debug logs at [LevelDebug].
	Debug(msg string, args ...any)
	// DebugContext logs at [LevelDebug] with the given context.
	DebugContext(ctx context.Context, msg string, args ...any)
	// Enabled reports whether l emits log records at the given context and level.
	Enabled(ctx context.Context, level slog.Level) bool
	// Error logs at [LevelError].
	Error(msg string, args ...any)
	// ErrorContext logs at [LevelError] with the given context.
	ErrorContext(ctx context.Context, msg string, args ...any)
	// Handler returns l's Handler.
	Handler() slog.Handler
	// Info logs at [LevelInfo].
	Info(msg string, args ...any)
	// InfoContext logs at [LevelInfo] with the given context.
	InfoContext(ctx context.Context, msg string, args ...any)
	// Log emits a log record with the current time and the given level and message.
	// The Record's Attrs consist of the Logger's attributes followed by
	// the Attrs specified by args.
	//
	// The attribute arguments are processed as follows:
	//   - If an argument is an Attr, it is used as is.
	//   - If an argument is a string and this is not the last argument,
	//     the following argument is treated as the value and the two are combined
	//     into an Attr.
	//   - Otherwise, the argument is treated as a value with key "!BADKEY".
	Log(ctx context.Context, level slog.Level, msg string, args ...any)
	// LogAttrs is a more efficient version of [Logger.Log] that accepts only Attrs.
	LogAttrs(ctx context.Context, level slog.Level, msg string, attrs ...slog.Attr)
	// Warn logs at [LevelWarn].
	Warn(msg string, args ...any)
	// WarnContext logs at [LevelWarn] with the given context.
	WarnContext(ctx context.Context, msg string, args ...any)
	// With returns a Logger that includes the given attributes
	// in each output operation. Arguments are converted to
	// attributes as if by [Logger.Log].
	With(args ...any) *slog.Logger
	// WithGroup returns a Logger that starts a group, if name is non-empty.
	// The keys of all attributes added to the Logger will be qualified by the given
	// name. (How that qualification happens depends on the [Handler.WithGroup]
	// method of the Logger's Handler.)
	//
	// If name is empty, WithGroup returns the receiver.
	WithGroup(name string) *slog.Logger
}

// Renderer defines the interface of a mojito compatible renderer
type Renderer interface {
	renderer.Renderer
}

// FileRenderer defines the interface of a mojito compatible renderer that's based on
// file templates
type FileRenderer interface {
	Renderer

	// SetTemplateDir will set the base directory where views are located
	SetTemplateDir(path string) error

	// TemplateDir will return the base directory where views are located
	TemplateDir() string
}

// Router defines a struct that can route requests,
// create route groups as well as start a webserver
type Router interface {
	router.Router

	// GET will add a route to this router for the get method
	GET(path string, handler interface{}) error
	// HEAD will add a route to this router for the head method
	HEAD(path string, handler interface{}) error
	// POST will add a route to this router for the post method
	POST(path string, handler interface{}) error
	// PUT will add a route to this router for the put method
	PUT(path string, handler interface{}) error
	// DELETE will add a route to this router for the delete method
	DELETE(path string, handler interface{}) error
	// CONNECT will add a route to this router for the connect method
	CONNECT(path string, handler interface{}) error
	// OPTIONS will add a route to this router for the options method
	OPTIONS(path string, handler interface{}) error
	// TRACE will add a route to this router for the trace method
	TRACE(path string, handler interface{}) error
	// PATCH will add a route to this router for the patch method
	PATCH(path string, handler interface{}) error
}
