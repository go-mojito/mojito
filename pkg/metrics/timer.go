package metrics

// Timer is a metric that represents a value that changes over time.
type Timer interface {
	// Observe records the duration of the execution since the timer was created.
	Observe()
}
