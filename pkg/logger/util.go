package logger

// Fields is a type definition for cleaner code
type Fields map[string]interface{}

// Clone will clone a map of logfields into a new one
func (f Fields) Clone() Fields {
	m := make(Fields)
	for n, v := range f {
		m[n] = v
	}
	return m
}
