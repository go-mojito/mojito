package router

import (
	"fmt"
	"reflect"

	"github.com/infinytum/injector"
)

func newNextFuncFactory(ctx Context, next HandlerFunc) reflect.Value {
	if next == nil {
		return reflect.ValueOf(func() error {
			// Do nothing because it's an empty default handler
			return nil
		})
	}
	return reflect.ValueOf(func() error {
		return next(ctx)
	})
}

// newDefaultHandlerArgFactory will create a fake factory that attempts to dependency inject the argument.
func newDefaultHandlerArgFactory(forType reflect.Type) (HandlerIntrospectorArgFactory, error) {
	isPointer := false
	if forType.Kind() == reflect.Pointer {
		forType = forType.Elem()
		isPointer = true
	}

	ctx := reflect.New(forType).Interface()

	// Structs are usually Context objects that hold one or multiple fields
	// that must be filled with dependencies
	if forType.Kind() == reflect.Struct {
		if err := injector.Fill(ctx); err != nil {
			// Perhaps its not a structure to fill but a singular struct dependency
			if err2 := injector.InjectInto(ctx); err2 != nil {
				return nil, fmt.Errorf("Dependency Injection failed: '%s' and '%s'", err, err2)
			}
		}
	}

	// Interfaces are always singular dependencies.
	if forType.Kind() == reflect.Interface {
		if err := injector.InjectInto(ctx); err != nil {
			return nil, err
		}
	}

	value := reflect.ValueOf(ctx)
	if !isPointer {
		value = value.Elem()
	}
	return func(ctx Context, next HandlerFunc) reflect.Value {
		return value
	}, nil
}
