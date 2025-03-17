import {
  GET_WEATHER_WEEK,
  getWeatherWeek,
  weatherWeekActions,
  weatherWeekReducer,
} from '@src/store/weatherWeek/weatherWeek.slice'

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
    const mockPayload = {
      cityName: 'Minsk',
      forecastday: [{ date: '2025-03-16', temp: 22 }],
    }
    const nextState = weatherWeekReducer(
      initialState,
      weatherWeekActions.getWeatherWeekSuccess(mockPayload),
    )
    expect(nextState.weatherWeekData).toEqual(mockPayload)
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
    const customPayload = { lat: 20, lon: 20, cityName: 'Minsk' }
    const action = getWeatherWeek(customPayload)

    expect(action.type).toBe(GET_WEATHER_WEEK)
    expect(action.payload).toEqual(customPayload)
  })
})
