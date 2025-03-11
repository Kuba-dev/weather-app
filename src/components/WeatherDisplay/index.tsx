import { memo } from 'react'

import { useTypedSelector } from '@src/hooks'
import { Title, Wrapper } from '@src/style/shared'
import { getDayOfWeek } from '@src/utils/getDayOfWeek'
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

  if (isLoading || isLoadingCurrentCity.isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }

  if (!forecastday || !cityName) {
    return (
      <Wrapper>
        <Title>Find the city in which you want to know the weather</Title>
      </Wrapper>
    )
  }

  const weekWeather = Object.values(forecastday).slice(1)

  if (error) {
    return (
      <Wrapper>
        <Title>{error}</Title>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <WeatherTodayDisplay />
      <WeatherDailyWrapper>
        {weekWeather.map(
          (
            {
              date,
              day: {
                avgtemp_c,
                condition: { icon },
              },
            },
            index,
          ) => (
            <WeatherItem
              key={index}
              time={getDayOfWeek(date)}
              temperature={Math.round(avgtemp_c)}
              image={icon}
            />
          ),
        )}
      </WeatherDailyWrapper>
    </Wrapper>
  )
})
