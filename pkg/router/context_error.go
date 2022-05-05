package router

type builtinErrorContext struct {
	Context
	err error
}

// Error implements Context
func (ctx *builtinErrorContext) Error() error {
	return ctx.err
}

func NewErrorContext(ctx Context, err error) *builtinErrorContext {
	return &builtinErrorContext{
		Context: ctx,
		err:     err,
	}
}
