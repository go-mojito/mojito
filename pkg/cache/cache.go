package cache

import "time"

// Cache defines the minimum API surface for a valid cache
type Cache interface {
	// Contains returns whether a key is present in the cache
	Contains(key string) (bool, error)
	// Delete removes a cache entry by its key, will do nothing if the
	// key was not present in the cache
	Delete(key string) error
	// ExpireAfter will mark a cache key for expiration after a certain duration
	ExpireAfter(key string, duration time.Duration) error
	// Get will attempt to read a stored cache value into the given
	// out interface pointer or error if not present
	Get(key string, out interface{}) error
	// Get will attempt to read a stored cache value into the given
	// out interface pointer or return default if not found
	GetOrDefault(key string, out interface{}, def interface{}) error
	// Set will attempt to store a value in the cache with a given key
	Set(key string, val interface{}) error
}
