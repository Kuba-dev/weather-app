import { put } from 'redux-saga/effects'

import { fetchAPI } from '@src/api/fetchAPI'
import { env, realFetch } from '@src/constants'
import { weatherWeekMock } from '@src/mocks/weatherMock'

import { GetWeatherWeekAction } from '../weatherWeek/types'
import { weatherWeekActions } from '../weatherWeek/weatherWeek.slice'

export function* getWeatherWeekSaga(action: GetWeatherWeekAction): Generator {
  const { lat, lon, cityName } = action.payload || {}
  const { WEATHERAPI_API, CITY_WEATHERAPI_URL } = env

  try {
    yield put(weatherWeekActions.getWeatherWeekStart())

    let forecast

    if (realFetch) {
      const payload = yield fetchAPI(CITY_WEATHERAPI_URL, {
        params: {
          key: WEATHERAPI_API,
          q: `${lat},${lon}`,
          days: 7,
          aqi: 'no',
          alerts: 'no',
        },
      })
      forecast = payload.data.forecast
    } else {
      forecast = weatherWeekMock
    }

    yield put(
      weatherWeekActions.getWeatherWeekSuccess({
        ...forecast,
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
