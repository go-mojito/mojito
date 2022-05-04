package mojito

import (
	"fmt"
	"reflect"

	"github.com/go-mojito/mojito/internal"
	"github.com/go-mojito/mojito/pkg/router"
	"github.com/go-mojito/mojito/pkg/stdlib"
	"github.com/infinytum/injector"
)

func init() {
	injector.Singleton(func() Cache {
		return stdlib.NewCache()
	})
	injector.Singleton(func() Logger {
		return stdlib.NewLogger()
	})
	injector.Singleton(func() Renderer {
		return stdlib.NewRenderer()
	})
	/*injector.Singleton(func() Router {
		return stdlib.NewRouter()
	})*/

	router.RegisterHandlerArgFactory[Context](func(ctx router.Context, next router.HandlerFunc) reflect.Value {
		return reflect.ValueOf(ctx)
	})
	router.RegisterHandlerArgFactory[RendererContext](func(ctx router.Context, next router.HandlerFunc) reflect.Value {
		return reflect.ValueOf(NewRenderContext(ctx))
	})
}

// DefaultCache will return the default cache instance for the mojito.Cache type
func DefaultCache() (cache Cache) {
	if err := injector.InjectInto(&cache); err != nil {
		DefaultLogger().Field("dependency", "cache").Error(err)
	}
	return
}

// DefaultLogger will return the default logger instance for the mojito.Logger type
func DefaultLogger() (logger Logger) {
	if err := injector.InjectInto(&logger); err != nil {
		fmt.Println("Cannot resolve default logger: ", err)
	}
	return
}

// DefaultRenderer will return the default renderer instance for the mojito.Renderer type
func DefaultRenderer() (renderer Renderer) {
	if err := injector.InjectInto(&renderer); err != nil {
		DefaultLogger().Field("dependency", "renderer").Error(err)
	}
	return
}

// DefaultRouter will return the default router instance for the mojito.Router type
func DefaultRouter() (router Router) {
	if err := injector.InjectInto(&router); err != nil {
		DefaultLogger().Field("dependency", "router").Error(err)
	}
	return
}

// Register will register a new dependency as default for the return type of the function
func Register(resolver interface{}, singleton bool) error {
	if singleton {
		return injector.Singleton(resolver)
	}
	return injector.Transient(resolver)
}

// RegisterNamed will register a new dependency under the given name
func RegisterNamed(name string, resolver interface{}, singleton bool) error {
	if singleton {
		return injector.Singleton(resolver, name)
	}
	return injector.Transient(resolver, name)
}

// Resolve will resolve a dependency based on the target objects type
func Resolve(obj interface{}) error {
	return injector.InjectInto(obj)
}

// ResolveNamed will resolve a dependecy based on the given name
func ResolveNamed(name string, obj interface{}) error {
	return injector.InjectInto(obj, name)
}

// SetResourcesDir will set the base directory where resources are located
func SetResourcesDir(path string) error {
	internal.ResourcesDir = path
	return nil
}

// ResourcesDir will return the base directory where resources are located
func ResourcesDir() string {
	return internal.ResourcesDir
}

/// Router Helpers

// GET will add a route to the default router for the get method
func GET(path string, handler interface{}) error {
	return DefaultRouter().GET(path, handler)
}

// HEAD will add a route to the default router for the head method
func HEAD(path string, handler interface{}) error {
	return DefaultRouter().HEAD(path, handler)
}

// POST will add a route to the default router for the post method
func POST(path string, handler interface{}) error {
	return DefaultRouter().POST(path, handler)
}

// PUT will add a route to the default router for the put method
func PUT(path string, handler interface{}) error {
	return DefaultRouter().PUT(path, handler)
}

// DELETE will add a route to the default router for the delete method
func DELETE(path string, handler interface{}) error {
	return DefaultRouter().DELETE(path, handler)
}

// CONNECT will add a route to the default router for the connect method
func CONNECT(path string, handler interface{}) error {
	return DefaultRouter().CONNECT(path, handler)
}

// OPTIONS will add a route to the default router for the options method
func OPTIONS(path string, handler interface{}) error {
	return DefaultRouter().OPTIONS(path, handler)
}

// TRACE will add a route to the default router for the trace method
func TRACE(path string, handler interface{}) error {
	return DefaultRouter().TRACE(path, handler)
}

// PATCH will add a route to the default router for the patch method
func PATCH(path string, handler interface{}) error {
	return DefaultRouter().PATCH(path, handler)
}

// WithGroup will create a new route group for the given prefix on the default router
func WithGroup(prefix string, callback func(group router.Group)) error {
	return DefaultRouter().WithGroup(prefix, callback)
}

// WithDefaultHandler will add a default handler to the default router
func WithDefaultHandler(handler interface{}) error {
	return DefaultRouter().WithDefaultHandler(handler)
}

// WithErrorHandler will add a error handler to the default router
func WithErrorHandler(handler interface{}) error {
	return DefaultRouter().WithErrorHandler(handler)
}

// WithMiddleware will add a middleware to the default router
func WithMiddleware(handler interface{}) error {
	return DefaultRouter().WithMiddleware(handler)
}

// WithRoute will add a new route with the given RouteMethod to the default router
func WithRoute(method string, path string, handler interface{}) error {
	return DefaultRouter().WithRoute(method, path, handler)
}

// ListenAndServe will start an HTTP webserver on the given address with the default router
func ListenAndServe(args ...string) error {
	return DefaultRouter().ListenAndServe(args[0])
}

// Shutdown will gracefully shutdown the default router
func Shutdown() error {
	return DefaultRouter().Shutdown()
}
