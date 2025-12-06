import { formatTime } from '@src/utils/formatTime'

import { typesOfTime } from '../constants'

const { isoDate } = typesOfTime
const { day16time15_05, day16time09_55 } = isoDate

describe('formatTime', () => {
  it('should format time correctly in AM for morning hours', () => {
    const date = new Date(day16time09_55)
    const result = formatTime(date)
    expect(result).toBe('9:55 AM')
  })

  it('should format time correctly in PM for afternoon hours', () => {
    const date = new Date(day16time15_05)
    const result = formatTime(date)
    expect(result).toBe('15:05 PM')
  })
})
