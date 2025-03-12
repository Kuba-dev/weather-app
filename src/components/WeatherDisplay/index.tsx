import { memo } from 'react'

import { useTypedSelector } from '@src/hooks'
import { Title, Wrapper } from '@src/style/shared'
import { getDayOfWeek } from '@src/utils/getDayOfWeek'
import { flattenWeatherData } from '@src/utils/weatherDataConversions'
import WeatherItem from '@components/WeatherItem'
import WeatherTodayDisplay from '@components/WeatherTodayDisplay'

import Loading from '../Loading'

import { WeatherDailyWrapper } from './styled'
import { WeatherData } from './types'

export default memo(function WeatherDisplay() {
  const {
    isLoading,
    error,
    weatherWeekData: { forecastday, cityName },
  }: WeatherData = useTypedSelector(state => state.weatherWeek)
  const isLoadingCurrentCity = useTypedSelector(
    state => state.isLoadingCurrentCity,
  )

  if (
    isLoading ||
    isLoadingCurrentCity.isLoading ||
    !forecastday ||
    !cityName ||
    error
  ) {
    return (
      <Wrapper>
        {(isLoading || isLoadingCurrentCity.isLoading) && <Loading />}
        {(!forecastday || !cityName) &&
          !(isLoading || isLoadingCurrentCity.isLoading) && (
            <Title>Find the city in which you want to know the weather</Title>
          )}
        {error && <Title>{error}</Title>}
      </Wrapper>
    )
  }

  const weekWeather = Object.values(forecastday).slice(1)

  return (
    <Wrapper>
      <WeatherTodayDisplay />
      <WeatherDailyWrapper>
        {weekWeather.map(data => {
          const { date_epoch, date, avgtemp_c, icon } = flattenWeatherData(data)
          return (
            <WeatherItem
              key={date_epoch}
              time={getDayOfWeek(date)}
              temperature={Math.round(avgtemp_c)}
              image={icon}
            />
          )
        })}
      </WeatherDailyWrapper>
    </Wrapper>
  )
})
