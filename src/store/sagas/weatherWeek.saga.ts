import { put } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid'

import { requestAPI } from '@src/api/fetchAPI'
import { env } from '@src/constants'

import { GetWeatherWeekAction } from '../weatherWeek/types'
import { weatherWeekActions } from '../weatherWeek/weatherWeek.slice'

export function* getWeatherWeekSaga(action: GetWeatherWeekAction): Generator {
  const { lat, lon, cityName } = action.payload || {}
  const { WEATHERAPI_API, CITY_WEATHERAPI_URL } = env

  try {
    yield put(weatherWeekActions.getWeatherWeekStart())
    const payload = yield requestAPI(CITY_WEATHERAPI_URL, {
      params: {
        key: WEATHERAPI_API,
        q: `${lat},${lon}`,
        days: 7,
        aqi: 'no',
        alerts: 'no',
      },
    })

    const { forecast } = payload.data

    const mockedForecast = {
      forecastday: [
        ...forecast.forecastday,
        {
          date_epoch: uuidv4(),
          date: '2025-03-14',
          day: {
            avgtemp_c: 18,
            condition: {
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            },
          },
        },
        {
          date_epoch: uuidv4(),
          date: '2025-03-15',
          day: {
            avgtemp_c: 18,
            condition: {
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            },
          },
        },
        {
          date_epoch: uuidv4(),
          date: '2025-03-16',
          day: {
            avgtemp_c: 20,
            condition: {
              icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
            },
          },
        },
        {
          date_epoch: uuidv4(),
          date: '2025-03-17',
          day: {
            avgtemp_c: 22,
            condition: {
              icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
            },
          },
        },
      ],
    }

    yield put(
      weatherWeekActions.getWeatherWeekSuccess({
        ...mockedForecast,
        cityName,
      }),
    )
  } catch (error) {
    if (error instanceof Error) {
      yield put(weatherWeekActions.getWeatherWeekError('City not found'))
    } else {
      yield put(
        weatherWeekActions.getWeatherWeekError('An unknown error occurred'),
      )
    }
  }
}
