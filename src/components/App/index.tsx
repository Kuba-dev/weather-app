import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { requestAPI } from '@src/api/fetchAPI'
import { TypeWeatherConst } from '@src/constants'
import { useActions, useWeatherType } from '@src/hooks'
import { getWeatherWeek } from '@src/store/weatherWeek/weatherWeek.slice'
import Header from '@components/Header'
import Main from '@components/Main'
import WeatherDisplay from '@components/WeatherDisplay'
import WeatherDisplayTime from '@components/WeatherDisplayTime'

import { ContainerApp, WrapperApp } from './styled'
import { Position } from './types'

export default function App() {
  const { typeWeather } = useWeatherType()
  const dispatch = useDispatch()
  const { setLoadingCurrentCity } = useActions()

  const AUTOCOMPLETE_CITY_API = import.meta.env.VITE_CITY_AUTOCOMPLETE_API
  const CITY_SEARCH_BY_COORDINATE = import.meta.env
    .VITE_CITY_SEARCH_BY_COORDINATE

  useEffect(() => {
    const successGetCurrentCity = async (position: Position) => {
      const { latitude, longitude } = position.coords
      const response = await requestAPI(
        `${CITY_SEARCH_BY_COORDINATE}?lat=${latitude}&lon=${longitude}&type=city&lang=en&limit=1&format=json&apiKey=${AUTOCOMPLETE_CITY_API}`,
      )
      const { city } = response.data.results[0]
      dispatch(
        getWeatherWeek({ lat: latitude, lon: longitude, cityName: city }),
      )
      setLoadingCurrentCity(false)
    }

    const errorGetCurrentCity = () => {
      setLoadingCurrentCity(false)
    }

    const fetchCityWeather = async () => {
      window.navigator.geolocation.getCurrentPosition(
        successGetCurrentCity,
        errorGetCurrentCity,
        {
          timeout: 10000,
        },
      )
    }

    fetchCityWeather()
  }, [
    AUTOCOMPLETE_CITY_API,
    CITY_SEARCH_BY_COORDINATE,
    dispatch,
    setLoadingCurrentCity,
  ])

  return (
    <ContainerApp>
      <WrapperApp>
        <Header />
        <Main />
      </WrapperApp>
      {typeWeather.type === TypeWeatherConst.DAILY ? (
        <WeatherDisplay />
      ) : (
        <WeatherDisplayTime />
      )}
    </ContainerApp>
  )
}
