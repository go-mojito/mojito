package stdlib

import (
	"bytes"
	"html/template"
	"io/ioutil"
	"path/filepath"
	"strings"

	"github.com/go-mojito/mojito/internal"
	"github.com/go-mojito/mojito/pkg/renderer"
)

type Renderer struct {
	// templateDir is the base path for all templates
	// This is used by the renderer implementation to figure out where to look for views.
	templateDir string
}

// Render will load a template file and render the template
// within using the viewbag as a context
func (b Renderer) Render(view string, bag renderer.ViewBag) (string, error) {
	file, err := ioutil.ReadFile(b.normalizeViewPath(view))
	if err != nil {
		return "", err
	}
	t, err := template.New(view).Parse(string(file))
	if err != nil {
		return "", err
	}

	var buff bytes.Buffer
	if err := t.Execute(&buff, bag.ToMap()); err != nil {
		return "", err
	}
	return buff.String(), nil
}

// SetTemplateDir will set the base directory where views are located
func (b *Renderer) SetTemplateDir(path string) error {
	b.templateDir = path
	return nil
}

// TemplateDir will return the absolute path of the configured templates directory
func (b Renderer) TemplateDir() string {
	dir := internal.ResourcesDir + "/templates"
	if b.templateDir != "" {
		dir = b.templateDir
	}
	path, err := filepath.Abs(dir)
	if err != nil {
		return internal.ResourcesDir + "/templates/"
	}
	return path + "/"
}

// normalizeViewPath ensures the path is within bounds and ends with .mojito
func (b Renderer) normalizeViewPath(view string) string {
	path := b.TemplateDir() + view + ".tpl"
	if strings.HasPrefix(path, b.TemplateDir()) {
		return path
	}
	return b.TemplateDir()
}

func NewRenderer() *Renderer {
	return &Renderer{}
}
