package mojito

import (
	"fmt"
	"net/http"
	"time"

	"github.com/go-mojito/mojito/pkg/renderer"
	"github.com/go-mojito/mojito/pkg/router"
	"github.com/mitchellh/hashstructure/v2"
)

const viewCachePrefix = "view_cache_"

type builtinRenderContext struct {
	router.Context

	cacheTTL time.Duration
	viewBag  renderer.ViewBag
}

// MustView implements RendererContext
func (ctx *builtinRenderContext) MustView(view string) {
	if err := ctx.View(view); err != nil {
		panic(err)
	}
}

func (ctx *builtinRenderContext) setDetectedContentType(data string) {
	if ctx.Response().Header().Get("Content-Type") == "" {
		ctx.Response().Header().Set("Content-Type", http.DetectContentType([]byte(data)))
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
			ctx.setDetectedContentType(render)
			return ctx.Response().WriteString(render)
		}
	}

	render, err := DefaultRenderer().Render(view, ctx.ViewBag())
	if err != nil {
		return err
	}

	if ctx.cacheTTL >= 0 {
		if err := cache.Set(viewCacheKey, render); err != nil {
			return err
		}
		if ctx.cacheTTL != 0 {
			if err := cache.ExpireAfter(viewCacheKey, ctx.cacheTTL); err != nil {
				return err
			}
		}
	}

	ctx.setDetectedContentType(render)
	return ctx.Response().WriteString(render)
}

// ViewBag implements RendererContext
func (ctx *builtinRenderContext) ViewBag() renderer.ViewBag {
	return ctx.viewBag
}

// SetViewCacheTTL sets the duration a rendered view is kept in the cache.
// If the duration is 0, the view is cached forever.
// If the duration is negative, the view is not cached.
func (ctx *builtinRenderContext) SetViewCacheTTL(t time.Duration) {
	ctx.cacheTTL = t
}

func NewRenderContext(ctx router.Context) RendererContext {
	return &builtinRenderContext{
		Context:  ctx,
		cacheTTL: time.Second * 5,
		viewBag:  renderer.NewViewBag(),
	}
}
