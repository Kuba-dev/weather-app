import { WeatherDay } from '@src/components/WeatherDisplay/types'
import { flattenWeatherData } from '@src/utils/weatherDataConversions'

describe('flattenWeatherData', () => {
  it('must decompose the nested object', () => {
    const input: WeatherDay = {
      date: '2025-03-16',
      date_epoch: '1742380800',
      day: {
        avgtemp_c: 15.3,
        condition: {
          text: 'Cloudy',
          icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
        },
      },
      hour: [],
    }

    const expectedOutput = {
      date: '2025-03-16',
      date_epoch: '1742380800',
      avgtemp_c: 15.3,
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    }

    const result = flattenWeatherData(input)
    expect(result).toEqual(expectedOutput)
  })
})
