import { renderHook } from '@testing-library/react-hooks'

import { useSingleton } from './use-singleton'

describe('useSingleton()', () => {
	const factory = jest.fn().mockReturnValue('VALUE')
	const component = jest.fn(() => useSingleton(factory))

	it('should call the given factory function only once', () => {
		const { rerender } = renderHook(component)

		expect(component).toHaveBeenCalledTimes(1)
		expect(factory).toHaveBeenCalledTimes(1)

		rerender()

		expect(component).toHaveBeenCalledTimes(2)
		expect(factory).toHaveBeenCalledTimes(1)
	})

	it('should return the same value each time', () => {
		factory.mockReturnValueOnce('OVERLOADED VALUE')

		const { rerender, result } = renderHook(component)

		expect(component).toHaveBeenCalledTimes(1)
		expect(result.current).toBe('OVERLOADED VALUE')

		rerender()

		expect(component).toHaveBeenCalledTimes(2)
		expect(result.current).toBe('OVERLOADED VALUE')
	})
})
