import { formatTime } from '@src/utils/formatTime'

describe('formatTime', () => {
  it('should format time correctly in AM for morning hours', () => {
    const date = new Date('2025-03-16T09:55:00')
    const result = formatTime(date)
    expect(result).toBe('9:55 AM')
  })

  it('should format time correctly in PM for afternoon hours', () => {
    const date = new Date('2025-03-16T15:05:00')
    const result = formatTime(date)
    expect(result).toBe('15:05 PM')
  })
})
