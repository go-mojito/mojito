package cache

import (
	"testing"
)

func TestCacheKeyHash(t *testing.T) {
	type args struct {
		key string
	}
	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "Generates consistent hashes",
			args: args{
				key: "test-key1",
			},
			want: KeyHash("test-key1"),
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := KeyHash(tt.args.key); got != tt.want {
				t.Errorf("CacheKeyHash() = %v, want %v", got, tt.want)
			}
		})
	}
}
