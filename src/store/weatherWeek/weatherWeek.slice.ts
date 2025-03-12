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

export const GET_WEATHER_WEEK = 'getWeatherWeek'
export const getWeatherWeek = createAction(GET_WEATHER_WEEK, payload => ({
  payload,
}))
