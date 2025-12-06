import { v4 as uuidv4 } from 'uuid'

import { WeatherDay } from '@src/components/WeatherDisplay/types'

export const weatherWeekMock: { forecastday: WeatherDay[] } = {
  forecastday: [
    {
      date_epoch: uuidv4(),
      date: '2025-03-14',
      day: {
        avgtemp_c: 18,
        condition: {
          text: 'Sunny',
          icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
        },
      },
      hour: Array.from({ length: 24 }, (_, index) => ({
        time_epoch: uuidv4(),
        time: `2025-03-14 ${String(index).padStart(2, '0')}:00`,
        temp_c: 10,
        condition: {
          icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
        },
      })),
    },
    {
      date_epoch: uuidv4(),
      date: '2025-03-15',
      day: {
        avgtemp_c: 18,
        condition: {
          icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          text: '',
        },
      },
      hour: [],
    },
    {
      date_epoch: uuidv4(),
      date: '2025-03-16',
      day: {
        avgtemp_c: 20,
        condition: {
          icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
          text: '',
        },
      },
      hour: [],
    },
    {
      date_epoch: uuidv4(),
      date: '2025-03-17',
      day: {
        avgtemp_c: 22,
        condition: {
          icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
          text: '',
        },
      },
      hour: [],
    },
    {
      date_epoch: uuidv4(),
      date: '2025-03-18',
      day: {
        avgtemp_c: 16,
        condition: {
          icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
          text: '',
        },
      },
      hour: [],
    },
    {
      date_epoch: uuidv4(),
      date: '2025-03-19',
      day: {
        avgtemp_c: 19,
        condition: {
          icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          text: '',
        },
      },
      hour: [],
    },
    {
      date_epoch: uuidv4(),
      date: '2025-03-20',
      day: {
        avgtemp_c: 21,
        condition: {
          icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          text: '',
        },
      },
      hour: [],
    },
  ],
}
