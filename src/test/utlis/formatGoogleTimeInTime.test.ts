import { formatGoogleTimeInTime } from '@src/utils/formatGoogleTimeInTime'

import { typesOfTime } from '../constants'

const { isoDate } = typesOfTime
const { day16time17_30 } = isoDate

describe('formatGoogleTimeInTime', () => {
  it('should return the date in XX:XX format', () => {
    const result = formatGoogleTimeInTime(day16time17_30)
    expect(result).toBe('20:30')
  })

  it('must handle invalid date', () => {
    const invalidDate = 'invalid date'
    const result = formatGoogleTimeInTime(invalidDate)
    expect(result).toBe('NaN:NaN')
  })
})
