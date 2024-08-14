package logger

import "maps"

// Fields is a type definition for cleaner code
type Fields map[string]interface{}

// Clone will clone a map of logfields into a new one
func (f Fields) Clone() Fields {
	return maps.Clone(f)
}
