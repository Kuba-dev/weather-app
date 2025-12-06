import { getTimeFromDate } from '@src/utils/getTimeFromDate'

describe('getTimeFromDate', () => {
  it('should return the time part of the date string', () => {
    const dateString = '2025-03-16 17:30'
    const result = getTimeFromDate(dateString)
    expect(result).toBe('17:30')
  })
})
