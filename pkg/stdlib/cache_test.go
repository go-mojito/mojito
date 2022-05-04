package stdlib

import (
	"context"
	"reflect"
	"sync"
	"testing"
	"time"

	"github.com/go-mojito/mojito/pkg/cache"
)

const (
	importantVideo  = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
	keyDoesExist    = "Key does exist"
	keyDoesNotExist = "Key does not exist"
	testKey1        = "test-key1"
	testKey2        = "test-key2"
	projectName     = "go-mojito"
)

func Test_BuiltinCache_Contains(t *testing.T) {
	type fields struct {
		cacheMap         sync.Map
		expireContextMap sync.Map
	}
	type args struct {
		key string
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		want    bool
		wantErr bool
	}{
		{
			name: keyDoesExist,
			fields: fields{
				cacheMap:         mapWithValue(testKey1, projectName),
				expireContextMap: sync.Map{},
			},
			args: args{
				key: testKey1,
			},
			want:    true,
			wantErr: false,
		},
		{
			name: keyDoesNotExist,
			fields: fields{
				cacheMap:         sync.Map{},
				expireContextMap: sync.Map{},
			},
			args: args{
				key: testKey1,
			},
			want:    false,
			wantErr: false,
		},
		{
			name: "Different key exists",
			fields: fields{
				cacheMap:         mapWithValue(testKey2, projectName),
				expireContextMap: sync.Map{},
			},
			args: args{
				key: testKey1,
			},
			want:    false,
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			m := &BuiltinCache{
				cacheMap:         tt.fields.cacheMap,
				expireContextMap: tt.fields.expireContextMap,
			}
			got, err := m.Contains(tt.args.key)
			if (err != nil) != tt.wantErr {
				t.Errorf("BuiltinCache.Contains() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("BuiltinCache.Contains() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_BuiltinCache_Delete(t *testing.T) {
	_, cancel := context.WithCancel(context.Background())

	type fields struct {
		cacheMap         sync.Map
		expireContextMap sync.Map
	}
	type args struct {
		key string
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		wantErr bool
	}{
		{
			name: keyDoesExist,
			fields: fields{
				cacheMap:         mapWithValue(testKey1, projectName),
				expireContextMap: sync.Map{},
			},
			args: args{
				key: testKey1,
			},
			wantErr: false,
		},
		{
			name: "Key Exists with expiration",
			fields: fields{
				cacheMap:         mapWithValue(testKey1, projectName),
				expireContextMap: mapWithValue(testKey1, cancel),
			},
			args: args{
				key: testKey1,
			},
			wantErr: false,
		},
		{
			name: keyDoesNotExist,
			fields: fields{
				cacheMap:         mapWithValue(testKey1, projectName),
				expireContextMap: mapWithValue(testKey2, cancel),
			},
			args: args{
				key: testKey1,
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			m := &BuiltinCache{
				cacheMap:         tt.fields.cacheMap,
				expireContextMap: tt.fields.expireContextMap,
			}
			if err := m.Delete(tt.args.key); (err != nil) != tt.wantErr {
				t.Errorf("BuiltinCache.Delete() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if _, exists := m.cacheMap.Load(cache.KeyHash(tt.args.key)); exists {
				t.Errorf("BuiltinCache.Delete() did not delete cache entry despite returning no error")
			}
			if _, exists := m.expireContextMap.Load(cache.KeyHash(tt.args.key)); exists {
				t.Errorf("BuiltinCache.Delete() did not delete cache expiration entry despite returning no error")
			}
		})
	}
}

func Test_BuiltinCache_Set(t *testing.T) {
	_, cancel := context.WithCancel(context.Background())
	type fields struct {
		cacheMap         sync.Map
		expireContextMap sync.Map
	}
	type args struct {
		key string
		val interface{}
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		wantErr bool
	}{
		{
			name: "Create new entry",
			fields: fields{
				cacheMap:         sync.Map{},
				expireContextMap: sync.Map{},
			},
			args: args{
				key: "important-video",
				val: importantVideo,
			},
			wantErr: false,
		},
		{
			name: "Overwrite existing entry",
			fields: fields{
				cacheMap:         mapWithValue(testKey1, projectName),
				expireContextMap: sync.Map{},
			},
			args: args{
				key: testKey1,
				val: importantVideo,
			},
			wantErr: false,
		},
		{
			name: "Overwrite existing entry and reset expiration",
			fields: fields{
				cacheMap:         mapWithValue(testKey1, projectName),
				expireContextMap: mapWithValue(testKey1, cancel),
			},
			args: args{
				key: testKey1,
				val: importantVideo,
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			m := &BuiltinCache{
				cacheMap:         tt.fields.cacheMap,
				expireContextMap: tt.fields.expireContextMap,
			}
			if err := m.Set(tt.args.key, tt.args.val); (err != nil) != tt.wantErr {
				t.Errorf("BuiltinCache.Set() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if _, exists := m.cacheMap.Load(cache.KeyHash(tt.args.key)); !exists {
				t.Errorf("BuiltinCache.Set() did not create cache entry despite returning no error")
			}
			if val, exists := m.cacheMap.Load(cache.KeyHash(tt.args.key)); exists && !reflect.DeepEqual(val, tt.args.val) {
				t.Errorf("BuiltinCache.Set() did not set correct cache entry value despite returning no error")
			}
			if _, exists := m.expireContextMap.Load(cache.KeyHash(tt.args.key)); exists {
				t.Errorf("BuiltinCache.Set() did not delete cache expiration entry despite returning no error")
			}
		})
	}
}

func Test_BuiltinCache_Get(t *testing.T) {
	type fields struct {
		cacheMap         sync.Map
		expireContextMap sync.Map
	}
	type args struct {
		key string
		out interface{}
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		wantErr bool
	}{
		{
			name: keyDoesNotExist,
			fields: fields{
				cacheMap:         sync.Map{},
				expireContextMap: sync.Map{},
			},
			args: args{
				key: testKey1,
			},
			wantErr: true,
		},
		{
			name: keyDoesExist,
			fields: fields{
				cacheMap:         mapWithValue(testKey1, importantVideo),
				expireContextMap: sync.Map{},
			},
			args: args{
				key: testKey1,
				out: new(string),
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			m := &BuiltinCache{
				cacheMap:         tt.fields.cacheMap,
				expireContextMap: tt.fields.expireContextMap,
			}
			if err := m.Get(tt.args.key, tt.args.out); (err != nil) != tt.wantErr {
				t.Errorf("BuiltinCache.Get() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func Test_BuiltinCache_GetOrDefault(t *testing.T) {
	type fields struct {
		cacheMap         sync.Map
		expireContextMap sync.Map
	}
	type args struct {
		key string
		out interface{}
		def interface{}
	}
	tests := []struct {
		name          string
		fields        fields
		args          args
		wantErr       bool
		expectDefault bool
	}{
		{
			name: keyDoesNotExist,
			fields: fields{
				cacheMap:         sync.Map{},
				expireContextMap: sync.Map{},
			},
			args: args{
				key: testKey1,
				out: new(string),
				def: "default",
			},
			wantErr:       false,
			expectDefault: true,
		},
		{
			name: keyDoesExist,
			fields: fields{
				cacheMap:         mapWithValue(testKey1, projectName),
				expireContextMap: sync.Map{},
			},
			args: args{
				key: testKey1,
				out: new(string),
				def: "default",
			},
			wantErr:       false,
			expectDefault: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			m := &BuiltinCache{
				cacheMap:         tt.fields.cacheMap,
				expireContextMap: tt.fields.expireContextMap,
			}
			if err := m.GetOrDefault(tt.args.key, tt.args.out, tt.args.def); (err != nil) != tt.wantErr {
				t.Errorf("BuiltinCache.GetOrDefault() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if val, exists := m.cacheMap.Load(cache.KeyHash(tt.args.key)); exists && tt.expectDefault && val != tt.args.def {
				t.Errorf("BuiltinCache.GetOrDefault() did not return default when expected value = %v, default %v", val, tt.args.def)
			}
		})
	}
}

func Test_BuiltinCache_ExpireAfter(t *testing.T) {
	type fields struct {
		cacheMap         sync.Map
		expireContextMap sync.Map
	}
	type args struct {
		key      string
		duration time.Duration
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		wantErr bool
	}{
		{
			name: keyDoesNotExist,
			fields: fields{
				cacheMap:         sync.Map{},
				expireContextMap: sync.Map{},
			},
			args: args{
				key:      testKey1,
				duration: time.Microsecond,
			},
			wantErr: true,
		},
		{
			name: keyDoesExist,
			fields: fields{
				cacheMap:         mapWithValue(testKey1, projectName),
				expireContextMap: sync.Map{},
			},

			args: args{
				key:      testKey1,
				duration: time.Second,
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			m := &BuiltinCache{
				cacheMap:         tt.fields.cacheMap,
				expireContextMap: tt.fields.expireContextMap,
			}
			if err := m.ExpireAfter(tt.args.key, tt.args.duration); (err != nil) != tt.wantErr {
				t.Errorf("BuiltinCache.ExpireAfter() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			<-time.After(tt.args.duration + time.Second)
			if _, exists := m.cacheMap.Load(cache.KeyHash(tt.args.key)); exists {
				t.Errorf("BuiltinCache.ExpireAfter() did not delete cache entry after expiration passed")
			}
		})
	}
}

func mapWithValue(key string, value interface{}) sync.Map {
	m := sync.Map{}
	m.Store(cache.KeyHash(key), value)
	return m
}
