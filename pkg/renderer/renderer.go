package renderer

// Renderer defines the interface of a mojito compatible renderer
type Renderer interface {
	// Render will load a template file and render the template
	// within using the viewbag as a context
	Render(view string, bag ViewBag) (string, error)
}
