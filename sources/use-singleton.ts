import { useRef } from 'react'

export const useSingleton = <T>(factory: () => T): T => {
	const valueRef = useRef<T>()
	if (valueRef.current === undefined) {
		valueRef.current = factory()
	}
	return valueRef.current
}
