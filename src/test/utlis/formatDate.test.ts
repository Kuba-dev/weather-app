import { formatDate } from '@src/utils/formatDate'

import { typesOfTime } from '../constants'

const { day } = typesOfTime

describe('formatDate', () => {
  it('should return a formatted date string for a valid Date object', () => {
    const date = new Date(day)
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('Sunday, March 16, 2025')
  })
})
