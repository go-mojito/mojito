package helpers

import "github.com/go-mojito/mojito"

// ViewHandler will server a given template using the default rendering engine
// without any view bag contents
func ViewHandler(view string) func(ctx mojito.RendererContext) error {
	return func(ctx mojito.RendererContext) error {
		if err := ctx.View(view); err != nil {
			return ctx.String(err.Error())
		}
		return nil
	}
}
