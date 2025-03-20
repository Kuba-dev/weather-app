import { useTypedSelector, useWeatherType } from '@src/hooks'

import { renderHook } from '@testing-library/react'

jest.mock('@src/hooks/useTypedSelector')

describe('useWeatherType', () => {
  it('should return typeWeather from useTypedSelector', () => {
    ;(useTypedSelector as jest.Mock).mockReturnValue('HOURLY')

    const { result } = renderHook(() => useWeatherType())

    expect(result.current.typeWeather).toBe('HOURLY')
  })
})
