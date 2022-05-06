package handler

import (
	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/pkg/renderer"
)

// View will server a given template using the default rendering engine
// without any view bag contents
func View(view string) func(ctx mojito.RendererContext) error {
	return func(ctx mojito.RendererContext) error {
		return ctx.View(view)
	}
}

// View will server a given template using the default rendering engine
// and provides the option to modify the viewbag in a callback function
func ViewWithBag(view string, callback func(bag renderer.ViewBag)) func(ctx mojito.RendererContext) error {
	return func(ctx mojito.RendererContext) error {
		callback(ctx.ViewBag())
		return ctx.View(view)
	}
}
