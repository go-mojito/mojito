package handler

import (
	"errors"
	"net/http"
	"os"

	"github.com/go-mojito/mojito"
	"github.com/go-mojito/mojito/log"
)

var (
	// AssetsPrefix is a prefix that is appended to the ResourcesDir to get the base path for all assets
	// This is used by the provided AssetsHandler implementation to serve files from
	AssetsPrefix = "/assets/"
)

// Assets will return a handler that can serve assets on a given
// path. AssetsHandler will look for the assets as ResourcesDir + AssetsPrefix
// on the file system. The path provided must be the same path as registered on
// the router. Make sure the path you register this handler on ends with the wildcard
// route parameter "path"! Example: "/assets/*path"
func Assets(ctx mojito.Context) error {
	fsPath := mojito.ResourcesDir() + AssetsPrefix
	fsInfo, err := os.Stat(fsPath)
	if err != nil {
		log.Error("Error while accessing assets path", "path", fsPath, "error", err.Error())
		return err
	}

	if !fsInfo.IsDir() {
		return errors.New("assets path is not a directory, cannot serve assets from path %s")
	}

	fileHandlerRequest := ctx.Request().GetRequest().Clone(ctx.Request().GetRequest().Context())
	fileHandlerRequest.URL.Path = "/" + ctx.Request().Param("path")
	http.FileServer(http.Dir(fsPath)).ServeHTTP(ctx.Response(), fileHandlerRequest)
	return nil
}

// HandleAssets will register the AssetsHandler on the default router
func HandleAssets() error {
	return HandleAssetsOn("/assets")
}

// HandleAssetsOnPath will register the AssetsHandler on the default router
// and a given path with the correct route param suffix
func HandleAssetsOn(path string) error {
	return mojito.DefaultRouter().GET(path+"/*path", Assets)
}
