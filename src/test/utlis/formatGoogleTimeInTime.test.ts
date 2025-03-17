import { formatGoogleTimeInTime } from '@src/utils/formatGoogleTimeInTime'

describe('formatGoogleTimeInTime', () => {
  it('should return the date in XX:XX format', () => {
    const isoDate = '2025-03-16T17:30:00Z'
    const result = formatGoogleTimeInTime(isoDate)
    expect(result).toBe('17:30')
  })

  it('must handle invalid date', () => {
    const invalidDate = 'invalid date'
    const result = formatGoogleTimeInTime(invalidDate)
    expect(result).toBe('NaN:NaN')
  })
})
