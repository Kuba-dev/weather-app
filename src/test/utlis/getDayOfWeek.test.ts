import { getDayOfWeek } from '@src/utils/getDayOfWeek'

import { typesOfTime } from '../constants'

const { day } = typesOfTime

describe('getDayOfWeek', () => {
  it('should return the correct day of the week', () => {
    const result = getDayOfWeek(day)
    expect(result).toBe('Sunday')
  })
})
