package renderer

import "github.com/infinytum/structures"

type ViewBag structures.Map[string, interface{}]

func NewViewBag() ViewBag {
	return structures.NewMap[string, interface{}]()
}
