package stdlib

import (
	"context"
	"fmt"
	"reflect"
	"sync"
	"time"

	"github.com/go-mojito/mojito/pkg/cache"
)

type Cache struct {
	cacheMap         sync.Map
	expireContextMap sync.Map
}

// Contains returns whether a key is present in the cache
func (m *Cache) Contains(key string) (bool, error) {
	hashedKey := cache.KeyHash(key)
	_, ok := m.cacheMap.Load(hashedKey)
	return ok, nil
}

// Delete removes a cache entry by its key, will do nothing if the
// key was not present in the cache
// It will also cancel any existing expirations for the given key
func (m *Cache) Delete(key string) error {
	hashedKey := cache.KeyHash(key)
	m.cacheMap.Delete(hashedKey)
	if cancel, ok := m.expireContextMap.LoadAndDelete(hashedKey); ok {
		cancel.(context.CancelFunc)()
	}
	return nil
}

// ExpireAfter will mark a cache key for expiration after a certain duration
func (m *Cache) ExpireAfter(key string, duration time.Duration) error {
	exists, _ := m.Contains(key)
	if !exists {
		return cache.ErrorCacheMiss
	}

	hashedKey := cache.KeyHash(key)
	ctx, cancel := context.WithCancel(context.TODO())
	m.expireContextMap.Store(hashedKey, cancel)

	go func() {
		select {
		case <-time.After(duration):
			if err := m.Delete(key); err != nil {
				fmt.Println(err)
			}
		case <-ctx.Done():
			return
		}
	}()
	return nil
}

// Get will attempt to read a stored cache value into the given
// out interface pointer or error if not present
func (m *Cache) Get(key string, out interface{}) error {
	hashedKey := cache.KeyHash(key)
	if cachedVal, ok := m.cacheMap.Load(hashedKey); ok {
		reflect.ValueOf(out).Elem().Set(reflect.ValueOf(cachedVal))
	} else {
		return cache.ErrorCacheMiss
	}
	return nil
}

// Get will attempt to read a stored cache value into the given
// out interface pointer or return default if not found
func (m *Cache) GetOrDefault(key string, out interface{}, def interface{}) error {
	hashedKey := cache.KeyHash(key)
	if cache, ok := m.cacheMap.Load(hashedKey); ok {
		reflect.ValueOf(out).Elem().Set(reflect.ValueOf(cache))
	} else {
		reflect.ValueOf(out).Elem().Set(reflect.ValueOf(def))
	}
	return nil
}

// Set will attempt to store a value in the cache with a given key
// It will also reset any expirations set for the given key
func (m *Cache) Set(key string, val interface{}) error {
	hashedKey := cache.KeyHash(key)
	m.cacheMap.Store(hashedKey, val)
	if cancel, ok := m.expireContextMap.LoadAndDelete(hashedKey); ok {
		cancel.(context.CancelFunc)()
	}
	return nil
}

// NewCache will create a new instance of the built-in cache
func NewCache() cache.Cache {
	return &Cache{
		cacheMap:         sync.Map{},
		expireContextMap: sync.Map{},
	}
}
