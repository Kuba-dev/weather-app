import { useDebounce } from '@src/hooks'

import { act, renderHook } from '@testing-library/react'

describe('useDebounce', () => {
  let func: jest.Mock
  let debouncedFunc: () => void
  let setLoading: jest.Mock

  beforeEach(() => {
    jest.useFakeTimers()
    func = jest.fn()
    setLoading = jest.fn()
    const { result } = renderHook(() => useDebounce(func, 1000, setLoading))
    debouncedFunc = result.current
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  test('calls a function only once when called multiple times', () => {
    for (let i = 0; i < 20; i++) {
      act(() => debouncedFunc())
    }

    act(() => {
      jest.runAllTimers()
    })

    expect(func).toHaveBeenCalledTimes(1)
    expect(setLoading).toHaveBeenCalledWith(true)
  })
})
