package helpers

import (
	"net/http"
	"os"
	"strings"

	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/log"
)

var (
	// AssetsPrefix is a prefix that is appended to the ResourcesDir to get the base path for all assets
	// This is used by the provided AssetsHandler implementation to serve files from
	AssetsPrefix = "/assets/"
)

// HandleAssets will register the AssetsHandler on a given router
// on the default path /assets
func HandleAssets(router mojito.Router) error {
	return HandleAssetsOnPath(router, "/assets")
}

// HandleAssetsOnPath will register the AssetsHandler on a given router
// and a given path with the correct route param suffix
func HandleAssetsOnPath(router mojito.Router, path string) error {
	return router.GET(path+"/*path", AssetsHandler(path))
}

// AssetsHandler will return a handler that can serve assets on a given
// path. AssetsHandler will look for the assets as ResourcesDir + AssetsPrefix
// on the file system. The path provided must be the same path as registered on
// the router.
func AssetsHandler(path string) func(ctx mojito.Context) {
	assetsDir := mojito.ResourcesDir() + AssetsPrefix
	return func(ctx mojito.Context) {
		fsPath := assetsDir
		fsInfo, err := os.Stat(fsPath)
		if err != nil {
			if os.IsNotExist(err) {
				ctx.Response().WriteHeader(404)
			} else if os.IsPermission(err) {
				ctx.Response().WriteHeader(403)
			} else {
				ctx.Response().WriteHeader(500)
			}
			log.Errorf("Error while accessing assets path %s: %s", fsPath, err.Error())
			return
		}

		if !fsInfo.IsDir() {
			ctx.Response().WriteHeader(500)
			log.Errorf("Assets path is not a directory, cannot serve assets from path %s", fsPath)
			return
		}
		ctx.Request().GetRequest().URL.Path = strings.TrimPrefix(ctx.Request().GetRequest().URL.Path, path)
		http.FileServer(http.Dir(fsPath)).ServeHTTP(ctx.Response(), ctx.Request().GetRequest())
	}
}
