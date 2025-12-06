import {
  GET_WEATHER_WEEK,
  getWeatherWeek,
  weatherWeekActions,
  weatherWeekReducer,
} from '@src/store/weatherWeek/weatherWeek.slice'

import { cityInfo, weatherWeekPayload } from '../constants'

describe('weatherWeek slice', () => {
  const initialState = {
    weatherWeekData: {
      cityName: '',
      forecastday: [],
    },
    isLoading: false,
    error: '',
  }

  it('must set isLoading to true on getWeatherWeekStart', () => {
    const nextState = weatherWeekReducer(
      initialState,
      weatherWeekActions.getWeatherWeekStart(),
    )
    expect(nextState.isLoading).toBe(true)
  })

  it('should update weatherWeekData and set isLoading to false on getWeatherWeekSuccess', () => {
    const nextState = weatherWeekReducer(
      initialState,
      weatherWeekActions.getWeatherWeekSuccess(weatherWeekPayload),
    )
    expect(nextState.weatherWeekData).toEqual(weatherWeekPayload)
    expect(nextState.isLoading).toBe(false)
  })

  it('should update error and set isLoading to false on getWeatherWeekError', () => {
    const mockError = 'Failed to fetch weather data'
    const nextState = weatherWeekReducer(
      initialState,
      weatherWeekActions.getWeatherWeekError(mockError),
    )
    expect(nextState.error).toBe(mockError)
    expect(nextState.isLoading).toBe(false)
  })

  it('should create a correct custom action for getWeatherWeek', () => {
    const action = getWeatherWeek(cityInfo)

    expect(action.type).toBe(GET_WEATHER_WEEK)
    expect(action.payload).toEqual(cityInfo)
  })
})
