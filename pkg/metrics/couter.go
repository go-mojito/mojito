package metrics

// Counter is a metric that represents a single numerical value that only ever
// goes up. That is, it cannot go down, which means that it represents a single
// numerical value that only ever increases. Counters are typically used to
// count requests served, tasks completed, errors occured, etc.
type Counter interface {
	// Inc increments the counter by 1. Use Add to increment it by arbitrary
	Inc()
	// Add adds the given value to the current value of the counter. Value cannot
	// be negative.
	Add(float64)
}
