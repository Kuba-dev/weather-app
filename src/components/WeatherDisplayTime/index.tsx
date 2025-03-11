import { memo } from 'react'

import { useTypedSelector } from '@src/hooks'
import { Title, Wrapper } from '@src/style/shared'
import { getTimeFromDate } from '@src/utils/getTimeFromDate'
import WeatherItem from '@components/WeatherItem'
import WeatherTodayDisplay from '@components/WeatherTodayDisplay'

import Loading from '../Loading'
import { WeatherData } from '../WeatherDisplay/types'

import { WeatherTimeWrapper } from './styled'

export default memo(function WeatherDisplayTime() {
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

  const { hour } = forecastday[0]

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
      <WeatherTimeWrapper>
        {hour.map(({ temp_c, time, condition: { icon } }, index) => (
          <WeatherItem
            key={index}
            time={getTimeFromDate(time)}
            temperature={Math.round(temp_c)}
            image={icon}
          />
        ))}
      </WeatherTimeWrapper>
    </Wrapper>
  )
})
