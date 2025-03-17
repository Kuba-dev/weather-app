import { getDayOfWeek } from '@src/utils/getDayOfWeek'

describe('getDayOfWeek', () => {
  it('должен возвращать правильный день недели', () => {
    const dateString = '2025-03-16'
    const result = getDayOfWeek(dateString)
    expect(result).toBe('Sunday')
  })
})
