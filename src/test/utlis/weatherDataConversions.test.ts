import { flattenWeatherData } from '@src/utils/weatherDataConversions'

import { wearherDay, weatherDayExpectedOutput } from '../constants'

describe('flattenWeatherData', () => {
  it('must decompose the nested object', () => {
    const result = flattenWeatherData(wearherDay)
    expect(result).toEqual(weatherDayExpectedOutput)
  })
})
