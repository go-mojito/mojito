package metrics

// Gauge is a metric that represents a single numerical value that can
// arbitrarily go up and down. It is an instantaneous sample of the metric
// at the time of measurement.
type Gauge interface {
	// Set sets the value of the gauge to the given value.
	Set(float64)
	// Inc increments the gauge by 1. Use Add to increment it by arbitrary
	Inc()
	// Dec decrements the gauge by 1. Use Sub to decrement it by arbitrary
	Dec()
	// Add adds the given value to the current value of the gauge. Value can be negative,
	// resulting in a decrease of the Gauge.
	Add(float64)
	// Sub subtracts the given value from the current value of the gauge. Value can be negative,
	// resulting in an increase of the Gauge.
	Sub(float64)
}
