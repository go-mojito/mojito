package introspector

func NewIntrospector[FactoryFunc any, Result any](resultFactory IntrospectorResultFactory[FactoryFunc, Result]) Introspector[FactoryFunc, Result] {
	return &introspector[FactoryFunc, Result]{resultFactory: resultFactory}
}

func mian() {
	spector := NewIntrospector(func(result IntrospectorResult[HandlerIntrospectorArgFactory]) bool {
		return true
	})
}
