package handler

import (
	"net/http"

	"github.com/go-mojito/mojito"
)

// Redirect will take incoming requests and redirect them to the given URL
// with a 302 - Temporarily moved status code
func Redirect(url string) func(ctx mojito.Context) {
	return redirect(url, 302)
}

// PermanentRedirect will take incoming requests and redirect them to the given URL
// with a 301 - Permanently moved status code
func PermanentRedirect(url string) func(ctx mojito.Context) {
	return redirect(url, 301)
}

// redirect is a generic redirection function that can return any status code.
func redirect(url string, statusCode int) func(ctx mojito.Context) {
	return func(ctx mojito.Context) {
		http.Redirect(ctx.Response(), ctx.Request().GetRequest(), url, statusCode)
	}
}
