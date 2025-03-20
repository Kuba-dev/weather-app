import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAPI } from '@src/api/fetchAPI'
import { env } from '@src/constants'
import { useActions } from '@src/hooks'
import { getWeatherWeek } from '@src/store/weatherWeek/weatherWeek.slice'

import { Position } from './types'

export default function useFetchCityCurrentWeather() {
  const dispatch = useDispatch()
  const { setLoadingCurrentCity, setCodeErrorCurrentCity } = useActions()
  const { CITY_SEARCH_BY_COORDINATE, CITY_AUTOCOMPLETE_API } = env

  const successGetCurrentCity = useCallback(
    async (position: Position) => {
      const { latitude, longitude } = position.coords
      const response = await fetchAPI(
        `${CITY_SEARCH_BY_COORDINATE}?lat=${latitude}&lon=${longitude}&type=city&lang=en&limit=1&format=json&apiKey=${CITY_AUTOCOMPLETE_API}`,
      )
      const { city } = response.data.results[0]
      dispatch(
        getWeatherWeek({ lat: latitude, lon: longitude, cityName: city }),
      )
      setLoadingCurrentCity(false)
    },
    [
      dispatch,
      CITY_SEARCH_BY_COORDINATE,
      CITY_AUTOCOMPLETE_API,
      setLoadingCurrentCity,
    ],
  )

  const errorGetCurrentCity = useCallback(
    (error: GeolocationPositionError) => {
      setCodeErrorCurrentCity(error.code)

      setLoadingCurrentCity(false)
    },
    [setCodeErrorCurrentCity, setLoadingCurrentCity],
  )

  const fetchCityCurrentWeather = useCallback(() => {
    window.navigator.geolocation.getCurrentPosition(
      successGetCurrentCity,
      errorGetCurrentCity,
      { timeout: 10000 },
    )
  }, [errorGetCurrentCity, successGetCurrentCity])

  return { fetchCityCurrentWeather }
}
