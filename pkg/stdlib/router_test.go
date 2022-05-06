package stdlib

import (
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"strconv"
	"testing"
	"time"

	"github.com/go-mojito/mojito/pkg/router"
)

const (
	waitTime        = 250 * time.Millisecond
	expectedNoError = "Expected no error, got '%s'"
	expectedStatus  = "Expected status code %d, got '%d'"
	expectedBody    = "Expected body 'OK', got '%s'"
	helloWorld      = "Hello World"
	benchmarkPath   = "/benchy"
)

func startServerTest(t *testing.T, r *Router) {
	go func() {
		if err := r.ListenAndServe(":8080"); err != nil && err != http.ErrServerClosed {
			t.Errorf(expectedNoError, err)
		}
	}()
	time.Sleep(waitTime)
}

func startServerBench(b *testing.B, r *Router) {
	go func() {
		if err := r.ListenAndServe(":8080"); err != nil && err != http.ErrServerClosed {
			b.Errorf(expectedNoError, err)
		}
	}()
	time.Sleep(waitTime)
}

func handler(r router.Router, m string) {
	r.WithRoute(m, "/", func(ctx router.Context) error {
		ctx.String("OK")
		return nil
	})
}

func request(method string, path string) (*http.Response, error) {
	req := &http.Request{
		Method: method,
		URL: &url.URL{
			Scheme: "http",
			Host:   "localhost:8080",
			Path:   path,
		},
	}

	client := &http.Client{}
	return client.Do(req)
}

func Test_Router_GET(t *testing.T) {
	r := NewRouter()
	handler(r, "GET")

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("GET", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "OK" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_GET_Params(t *testing.T) {
	r := NewRouter()
	r.GET("/:name", func(ctx router.Context) error {
		ctx.String(fmt.Sprintf("Hello %s", ctx.Request().Param("name")))
		return nil
	})

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("GET", "/world")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "Hello world" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_HEAD(t *testing.T) {
	r := NewRouter()
	handler(r, "HEAD")

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("HEAD", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
}

func Test_Router_POST(t *testing.T) {
	r := NewRouter()
	handler(r, "POST")

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("POST", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "OK" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_PUT(t *testing.T) {
	r := NewRouter()
	handler(r, "PUT")

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("PUT", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "OK" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_DELETE(t *testing.T) {
	r := NewRouter()
	handler(r, "DELETE")

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("DELETE", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "OK" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_CONNECT(t *testing.T) {
	r := NewRouter()
	handler(r, "CONNECT")

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("CONNECT", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "OK" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_OPTIONS(t *testing.T) {
	r := NewRouter()
	handler(r, "OPTIONS")

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("OPTIONS", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "OK" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_TRACE(t *testing.T) {
	r := NewRouter()
	handler(r, "TRACE")

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("TRACE", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "OK" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_PATCH(t *testing.T) {
	r := NewRouter()
	handler(r, "PATCH")

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("PATCH", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 200 {
		t.Errorf(expectedStatus, 200, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "OK" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_WithNotFoundHandler(t *testing.T) {
	r := NewRouter()
	r.WithNotFoundHandler(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(404)
		w.Write([]byte("Not found"))
	})

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("GET", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 404 {
		t.Errorf(expectedStatus, 404, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "Not found" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_WithMethodNotAllowedHandler(t *testing.T) {
	r := NewRouter()
	handler(r, "POST")
	r.WithMethodNotAllowedHandler(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(403)
		w.Write([]byte("Method not allowed"))
	})

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("GET", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 403 {
		t.Errorf(expectedStatus, 403, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "Method not allowed" {
		t.Errorf(expectedBody, body)
	}
}

func Test_Router_WithErrorHandler(t *testing.T) {
	r := NewRouter()
	r.GET("/", func(ctx router.Context) error {
		return errors.New("error")
	})
	r.WithErrorHandler(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(500)
		w.Write([]byte("Internal Server Error"))
	})

	startServerTest(t, r)
	defer r.Shutdown()

	res, err := request("GET", "/")
	if err != nil {
		t.Errorf(expectedNoError, err)
	}
	if res.StatusCode != 500 {
		t.Errorf(expectedStatus, 500, res.StatusCode)
	}
	if body, _ := ioutil.ReadAll(res.Body); string(body) != "Internal Server Error" {
		t.Errorf(expectedBody, body)
	}
}

func Benchmark_Router_Handler(b *testing.B) {
	r := NewRouter()
	r.GET("/", func(ctx router.Context) error {
		ctx.String(helloWorld)
		return nil
	})

	startServerBench(b, r)
	defer r.Shutdown()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		request("GET", "/")
	}
	b.StopTimer()
}

func Benchmark_Router_Handler_Not_Found(b *testing.B) {
	r := NewRouter()
	r.GET("/", func(ctx router.Context) error {
		ctx.String(helloWorld)
		return nil
	})

	startServerBench(b, r)
	defer r.Shutdown()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		request("GET", benchmarkPath)
	}
	b.StopTimer()
}

func Benchmark_Router_Handler_With_Middleware_1(b *testing.B) {
	r := NewRouter()
	r.WithMiddleware(func(ctx router.Context, next func() error) error {
		ctx.Metadata().Add("foo", "bar")
		return next()
	})
	r.GET("/", func(ctx router.Context) error {
		ctx.String(helloWorld)
		return nil
	})

	startServerBench(b, r)
	defer r.Shutdown()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		request("GET", benchmarkPath)
	}
	b.StopTimer()
}

func Benchmark_Router_Handler_With_Middleware_5(b *testing.B) {
	r := NewRouter()
	for i := 1; i == 5; i++ {
		r.WithMiddleware(func(ctx router.Context, next func() error) error {
			ctx.Metadata().Add("foo"+strconv.Itoa(i), "bar")
			return next()
		})
	}
	r.GET("/", func(ctx router.Context) error {
		ctx.String(helloWorld)
		return nil
	})

	startServerBench(b, r)
	defer r.Shutdown()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		request("GET", benchmarkPath)
	}
	b.StopTimer()
}
