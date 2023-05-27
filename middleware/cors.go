package middleware

import (
	"net/http"
	"regexp"
	"strconv"
	"strings"

	"github.com/go-mojito/mojito"
)

type CORSConfig struct {
	// The Access-Control-Allow-Origin response header indicates whether the response can be
	// shared with requesting code from the given origin.
	//
	// Optional. Default value []string{"*"}.
	//
	// See also: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
	AllowOrigins []string

	// The Access-Control-Allow-Methods response header specifies one or more methods allowed when
	// accessing a resource in response to a preflight request.
	//
	// Optional. Default value "GET,POST,HEAD,PUT,DELETE,PATCH"
	//
	// See also: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods
	AllowMethods []string

	// The Access-Control-Allow-Headers response header is used in response to a preflight request which includes
	// the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request.
	//
	// Optional. Default value []string{}.
	//
	// See also: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
	AllowHeaders []string

	// The Access-Control-Allow-Credentials response header tells browsers whether to expose the response
	// to the frontend JavaScript code when the request's credentials mode (Request.credentials) is include.
	//
	// Optional. Default value false.
	//
	// See also: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
	AllowCredentials bool

	// The Access-Control-Expose-Headers response header allows a server to indicate which response headers
	// should be made available to scripts running in the browser, in response to a cross-origin request.
	//
	// Optional. Default value []string{}.
	//
	// See also: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers
	ExposeHeaders []string `yaml:"expose_headers"`

	// The Access-Control-Max-Age response header indicates how long the results of a preflight request
	// (that is the information contained in the Access-Control-Allow-Methods and Access-Control-Allow-Headers headers)
	// can be cached.
	//
	// Optional. Default value 0.
	//
	// See also: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age
	MaxAge int
}

var (
	// CORSDefault is the default CORS config.
	CORSDefault = CORSConfig{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{http.MethodGet, http.MethodHead, http.MethodPut, http.MethodPatch, http.MethodPost, http.MethodDelete},
		AllowHeaders:     []string{},
		AllowCredentials: false,
		ExposeHeaders:    []string{},
	}
)

// CORS provides a simple middleware implementation that will handle CORS requests using the default config
func CORS() func(ctx mojito.Context, next func() error) error {
	return CORSWithConfig(CORSDefault)
}

// CORSWithConfig provides a simple middleware implementation that will handle CORS requests
func CORSWithConfig(config CORSConfig) func(ctx mojito.Context, next func() error) error {

	allowedOrigins := make([]string, len(config.AllowOrigins))
	for i, origin := range config.AllowOrigins {
		pattern := regexp.QuoteMeta(origin)
		pattern = strings.ReplaceAll(pattern, "\\*", ".*")
		pattern = strings.ReplaceAll(pattern, "\\?", ".")
		pattern = "^" + pattern + "$"
		allowedOrigins[i] = pattern
	}
	allowedMethods := strings.Join(config.AllowMethods, ",")
	allowedHeaders := strings.Join(config.AllowHeaders, ",")
	exposedHeaders := strings.Join(config.ExposeHeaders, ",")
	maxAge := strconv.Itoa(config.MaxAge)

	return func(ctx mojito.Context, next func() error) error {
		ctx.Response().Header().Set("Vary", "Origin")

		isPreflight := ctx.Request().GetRequest().Method == http.MethodOptions

		// Get origin from request headers.
		origin := ctx.Request().Header("Origin")
		allowOrigin := ""

		// No Origin header present. Probably not a browser client
		if origin == "" {
			if isPreflight {
				ctx.Response().WriteHeader(http.StatusNoContent)
				_, err := ctx.Response().Write(nil)
				return err
			}
			return next()
		}

		// Check if origin matches config.AllowOrigins first for performance
		for _, o := range config.AllowOrigins {
			if o == "*" || o == origin {
				allowOrigin = o
				break
			}
			if matchSubdomain(origin, o) {
				allowOrigin = origin
				break
			}
		}

		// If no match was found, check if origin matches allowedOrigins patterns
		if allowOrigin == "" {
			for _, pattern := range allowedOrigins {
				if match, _ := regexp.MatchString(pattern, origin); match {
					allowOrigin = origin
					break
				}
			}
		}

		// If the origin is not allowed, return early.
		if allowOrigin == "" {
			if !isPreflight {
				return next()
			}
			ctx.Response().WriteHeader(http.StatusNoContent)
			_, err := ctx.Response().Write(nil)
			return err
		}

		// Set the allow origin and allow credentials headers
		ctx.Response().Header().Set("Access-Control-Allow-Origin", allowOrigin)
		if config.AllowCredentials {
			ctx.Response().Header().Set("Access-Control-Allow-Credentials", "true")
		}

		// If request is not a preflight request, handle it.
		if !isPreflight {
			// If exposedHeaders is set, then set it to the exposed headers
			if exposedHeaders != "" {
				ctx.Response().Header().Set("Access-Control-Expose-Headers", exposedHeaders)
			}
			return next()
		}

		ctx.Response().Header().Add("Vary", "Access-Control-Request-Method")
		ctx.Response().Header().Add("Vary", "Access-Control-Request-Headers")
		ctx.Response().Header().Set("Access-Control-Allow-Methods", allowedMethods)

		// If allowedHeders is set, then set it to the allowed headers
		if allowedHeaders != "" {
			ctx.Response().Header().Set("Access-Control-Allow-Headers", allowedHeaders)
		} else {
			h := ctx.Request().Header("Access-Control-Request-Headers")
			if h != "" {
				ctx.Response().Header().Set("Access-Control-Allow-Headers", h)
			}
		}

		// If a maxAge was set, then set that.
		if config.MaxAge > 0 {
			ctx.Response().Header().Set("Access-Control-Max-Age", maxAge)
		}

		ctx.Response().WriteHeader(http.StatusNoContent)
		_, err := ctx.Response().Write(nil)
		return err
	}
}

const maxDomainLength = 253

func matchSubdomain(domain string, pattern string) bool {
	if !matchScheme(domain, pattern) {
		return false
	}

	// Get url minus the scheme indexes
	d := strings.Index(domain, "://")
	p := strings.Index(pattern, "://")
	if d == -1 || p == -1 {
		return false
	}

	// Get urls minus the scheme
	dom := domain[d+3:]
	pat := pattern[p+3:]

	// To avoid long looping due to too long domain
	if len(domain) > maxDomainLength {
		return false
	}

	// Get parts of the domain and pattern and reorganize them
	dparts := strings.Split(dom, ".")
	pparts := strings.Split(pat, ".")
	for i := len(dparts)/2 - 1; i >= 0; i-- {
		opp := len(dparts) - 1 - i
		dparts[i], dparts[opp] = dparts[opp], dparts[i]
	}
	for i := len(pparts)/2 - 1; i >= 0; i-- {
		opp := len(pparts) - 1 - i
		pparts[i], pparts[opp] = pparts[opp], pparts[i]
	}

	// Attempt to match the parts
	for i, v := range dparts {
		if len(pparts) <= i {
			return false
		}
		if pparts[i] == "*" {
			return true
		}
		if pparts[i] != v {
			return false
		}
	}
	return false
}

func matchScheme(domain string, pattern string) bool {
	d := strings.Index(domain, ":")
	p := strings.Index(pattern, ":")
	return d != -1 && p != -1 && domain[:d] == pattern[:p]
}
