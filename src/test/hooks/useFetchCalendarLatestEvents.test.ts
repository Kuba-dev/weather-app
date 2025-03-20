import { fetchAPI } from '@src/api/fetchAPI'
import { useFetchCalendarLastestEvents } from '@src/hooks'

import { act, renderHook } from '@testing-library/react'

jest.mock('@src/api/fetchAPI')

jest.mock('@src/hooks/useActions', () => () => ({
  fetchEventsStart: jest.fn(),
  fetchEventsFailure: jest.fn(),
  fetchEventsSuccess: jest.fn(),
}))

describe('useFetchCalendarLastestEvents', () => {
  const mockFetchAPI = fetchAPI as jest.Mock

  it('should receive events successfully', async () => {
    const events = [
      { id: '1', summary: 'Test Event', start: '1235-12-12 13:00' },
    ]
    mockFetchAPI.mockResolvedValueOnce({ data: { items: events } })

    const { result } = renderHook(() => useFetchCalendarLastestEvents())

    await act(async () => {
      await result.current.fetchLatestEvents()
    })

    expect(result.current.isFetching.current).toBe(true)
    expect(mockFetchAPI).toHaveBeenCalledTimes(1)
  })

  it('must handle the error when requesting', async () => {
    const errorMessage = 'Request error'
    mockFetchAPI.mockRejectedValueOnce(new Error(errorMessage))

    const { result } = renderHook(() => useFetchCalendarLastestEvents())

    await act(async () => {
      await result.current.fetchLatestEvents()
    })

    expect(result.current.isFetching.current).toBe(false)
    expect(mockFetchAPI).toHaveBeenCalledTimes(1)
  })

  it('must handle unknown error', async () => {
    mockFetchAPI.mockRejectedValueOnce('Incorrect error')

    const { result } = renderHook(() => useFetchCalendarLastestEvents())

    await act(async () => {
      await result.current.fetchLatestEvents()
    })

    expect(result.current.isFetching.current).toBe(false)
    expect(mockFetchAPI).toHaveBeenCalledTimes(1)
  })
})
