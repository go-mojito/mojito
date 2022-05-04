package logger

import (
	"reflect"
	"testing"
)

func TestLogFields_Clone(t *testing.T) {
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
