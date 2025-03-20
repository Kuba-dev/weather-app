import { WeatherDay } from '@src/components/WeatherDisplay/types'
import { City } from '@src/store/stateElasticSearch/types'

export const wearherDay: WeatherDay = {
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

export const weatherDayExpectedOutput = {
  date: '2025-03-16',
  date_epoch: '1742380800',
  avgtemp_c: 15.3,
  icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
}

export const typesOfTime = {
  day: '2025-03-16',
  dayAndTime: '2025-03-16 17:30',
  isoDate: {
    day16time17_30: '2025-03-16T17:30:00Z',
    day16time15_05: '2025-03-16T15:05:00',
    day16time09_55: '2025-03-16T09:55:00',
  },
}

export const eventList = [
  {
    id: 1,
    summary: 'Go to walk',
    start: `2994-12-32 12:00`,
  },
  {
    id: 2,
    summary: 'Buy groceries',
    start: `2994-12-31 13:00`,
  },
]

export const cityList: City[] = [
  { city: 'Minsk', id: 1 },
  { city: 'Moscow', id: 2 },
]

export const cityInfo = { lat: 20, lon: 20, cityName: 'Minsk' }

export const weatherWeekPayload = {
  cityName: 'Minsk',
  forecastday: [{ date: '2025-03-16', temp: 22 }],
}
