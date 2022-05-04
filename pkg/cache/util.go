package cache

import (
	"crypto/sha256"
	"encoding/hex"
	"errors"
)

// ErrorCacheMiss is returned when the cache could not find the given key
var ErrorCacheMiss = errors.New("the given key was not found in the cache")

// CacheKeyHash returns the SHA256 hash of a string for caching purposes
func KeyHash(key string) string {
	h := sha256.New()
	h.Write([]byte(key))
	return hex.EncodeToString(h.Sum(nil))
}
