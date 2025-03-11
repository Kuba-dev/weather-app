import { put } from 'redux-saga/effects'

import { requestAPI } from '@src/api/fetchAPI'

import { GetWeatherWeekAction } from './types'

import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  weatherWeekData: {
    cityName: '',
    forecastday: [],
  },
  isLoading: false,
  error: '',
}

const weatherWeekSlice = createSlice({
  name: 'weatherWeek',
  initialState,
  reducers: {
    getWeatherWeekStart: state => {
      state.isLoading = true
    },
    getWeatherWeekSuccess: (state, action) => {
      state.weatherWeekData = action.payload
      state.isLoading = false
    },
    getWeatherWeekError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export const { actions: weatherWeekActions, reducer: weatherWeekReducer } =
  weatherWeekSlice

export function* getWeatherWeekSaga(action: GetWeatherWeekAction): Generator {
  const { lat, lon, cityName } = action.payload || {}

  try {
    yield put(weatherWeekActions.getWeatherWeekStart())
    const payload = yield requestAPI(
      `https://api.weatherapi.com/v1/forecast.json`,
      {
        params: {
          key: import.meta.env.VITE_WEATHERAPI_API,
          q: `${lat},${lon}`,
          days: 7,
          aqi: 'no',
          alerts: 'no',
        },
      },
    )

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

export const GET_WEATHER_WEEK = 'getWeatherWeek'
export const getWeatherWeek = createAction(GET_WEATHER_WEEK, payload => ({
  payload,
}))
