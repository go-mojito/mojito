package mojito

import (
	"fmt"
	"time"

	"github.com/go-mojito/mojito/pkg/renderer"
	"github.com/go-mojito/mojito/pkg/router"
	"github.com/infinytum/structures"
	"github.com/mitchellh/hashstructure/v2"
)

var viewCachePrefix = "view_cache_"

type builtinRenderContext struct {
	router.Context
	viewBag renderer.ViewBag
}

// MustView implements RendererContext
func (ctx *builtinRenderContext) MustView(view string) {
	if err := ctx.View(view); err != nil {
		panic(err)
	}
}

// View implements RendererContext
func (ctx *builtinRenderContext) View(view string) error {
	viewbagHash, err := hashstructure.Hash(ctx.ViewBag(), hashstructure.FormatV2, nil)
	if err != nil {
		return err
	}
	viewCacheKey := fmt.Sprintf("%s_%s_%d", viewCachePrefix, view, viewbagHash)
	cache := DefaultCache()
	if exists, err := cache.Contains(viewCacheKey); err == nil && exists {
		var render string
		if err := cache.Get(viewCacheKey, &render); err == nil {
			return ctx.String(render)
		}
	}

	render, err := DefaultRenderer().Render(view, ctx.ViewBag())
	if err != nil {
		return err
	}
	if err := cache.Set(viewCacheKey, render); err == nil {
		return err
	}
	if err := cache.ExpireAfter(viewCacheKey, time.Second*5); err != nil {
		return err
	}

	return ctx.String(render)
}

// ViewBag implements RendererContext
func (ctx *builtinRenderContext) ViewBag() renderer.ViewBag {
	return ctx.viewBag
}

func NewRenderContext(ctx router.Context) RendererContext {
	return &builtinRenderContext{
		Context: ctx,
		viewBag: structures.NewMap[string, interface{}](),
	}
}
