package mojito

import (
	"fmt"
	"time"

	"github.com/go-mojito/mojito/pkg/renderer"
	"github.com/go-mojito/mojito/pkg/router"
	"github.com/mitchellh/hashstructure/v2"
)

const viewCachePrefix = "view_cache_"
const viewBagMetadataKey = "mojito.pkg.renderer.ViewBag"

type builtinRenderContext struct {
	router.Context
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
	if err := cache.Set(viewCacheKey, render); err != nil {
		return err
	}
	if err := cache.ExpireAfter(viewCacheKey, time.Second*5); err != nil {
		return err
	}

	return ctx.String(render)
}

// ViewBag implements RendererContext
func (ctx *builtinRenderContext) ViewBag() renderer.ViewBag {
	viewBag, ok := ctx.Context.Metadata().GetOrSet(viewBagMetadataKey, renderer.NewViewBag()).(renderer.ViewBag)
	if !ok {
		panic("ViewBag is not a renderer.ViewBag")
	}
	return viewBag
}

func NewRenderContext(ctx router.Context) RendererContext {
	return &builtinRenderContext{
		Context: ctx,
	}
}
