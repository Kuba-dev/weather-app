import { put } from 'redux-saga/effects'

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
    yield put(
      weatherWeekActions.getWeatherWeekSuccess({
        ...forecast,
        cityName,
      }),
    )
  } catch (error) {
    if (error instanceof Error) {
      yield put(weatherWeekActions.getWeatherWeekError(error.message))
    } else {
      yield put(
        weatherWeekActions.getWeatherWeekError('An unknown error occurred'),
      )
    }
  }
}
