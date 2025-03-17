import { formatDate } from '@src/utils/formatDate'

describe('formatDate', () => {
  it('should return a formatted date string for a valid Date object', () => {
    const date = new Date('2025-03-16')
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('Sunday, March 16, 2025')
  })
})
