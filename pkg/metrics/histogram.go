package metrics

// Histogram is a metric that represents a distribution of observations.
type Histogram interface {
	// Observe adds a sample to the histogram.
	Observe(float64)
}
