package logger

import (
	"reflect"
	"testing"
)

func Test_Fields_Clone(t *testing.T) {
	tests := []struct {
		name string
		f    Fields
		want Fields
	}{
		{
			name: "Without data",
			f:    Fields{},
			want: Fields{},
		},
		{
			name: "With data",
			f: Fields{
				"key": "val",
			},
			want: Fields{
				"key": "val",
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := tt.f.Clone(); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("util.LogFields.Clone() = %v, want %v", got, tt.want)
			}
			got := tt.f.Clone()
			got["test"] = "data"
			if _, exists := tt.want["test"]; exists {
				t.Errorf("util.LogFields.Clone() is not decoupled from original")
			}
		})
	}
}

func Benchmark_Fields_Clone(b *testing.B) {
	orig := Fields{
		"a": "1",
		"b": "2",
		"c": "3",
		"d": "4",
		"e": "5",
		"f": "6",
	}

	copies := make([]Fields, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		copies[i] = orig.Clone()
	}
	b.StopTimer()
}
