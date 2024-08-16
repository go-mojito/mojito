package mojito

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/go-mojito/mojito/pkg/router"
)

func Test_MojitoContext_Status(t *testing.T) {
	req := httptest.NewRequest("GET", "/", nil)
	resp := httptest.NewRecorder()

	router, _ := router.NewContextFromStdlib(resp, req)
	ctx := &mojitoContext{router}

	ctx.Status(http.StatusTeapot)
	if resp.Code != http.StatusTeapot {
		t.Errorf("Expected status code %d, got %d", http.StatusTeapot, resp.Code)
	}
}

func Test_MojitoContext_JSON(t *testing.T) {
	req := httptest.NewRequest("GET", "/", nil)
	resp := httptest.NewRecorder()

	router, _ := router.NewContextFromStdlib(resp, req)
	ctx := &mojitoContext{router}

	body := map[string]string{"hello": "world"}
	err := ctx.JSON(body)
	if err != nil {
		t.Errorf("Expected no error, got %v", err)
	}

	if resp.Body.String() != `{"hello":"world"}` {
		t.Errorf("Expected response body %s, got %s", `{"hello":"world"}`, resp.Body.String())
	}
}

func Test_MojitoContext_String(t *testing.T) {
	req := httptest.NewRequest("GET", "/", nil)
	resp := httptest.NewRecorder()

	router, _ := router.NewContextFromStdlib(resp, req)
	ctx := &mojitoContext{router}

	body := "hello world"
	err := ctx.String(body)
	if err != nil {
		t.Errorf("Expected no error, got %v", err)
	}

	if resp.Body.String() != body {
		t.Errorf("Expected response body %s, got %s", body, resp.Body.String())
	}
}
