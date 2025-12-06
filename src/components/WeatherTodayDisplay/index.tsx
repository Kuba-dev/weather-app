import { useTypedSelector } from '@src/hooks'
import { Wrapper } from '@src/style/shared'

import Loading from '../Loading'
import { WeatherData } from '../WeatherDisplay/types'

import {
  CityTitle,
  ContentWrapper,
  ImageWeather,
  Title,
  WeatherTodayWrapper,
} from './styled'

export default function WeatherTodayDisplay() {
  const {
    isLoading,
    weatherWeekData: { forecastday, cityName },
  }: WeatherData = useTypedSelector(state => state.weatherWeek)
  const currentCity = useTypedSelector(state => state.currentCity)

  if (isLoading || currentCity.isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }

  const {
    day: {
      avgtemp_c,
      condition: { icon },
    },
  } = forecastday[0]

  return (
    <WeatherTodayWrapper>
      <CityTitle>{cityName}</CityTitle>
      <ContentWrapper>
        <ImageWeather src={icon} alt='weather icon' />
        <Title>Today</Title>
        <Title id='temp'>{Math.round(avgtemp_c)}°C</Title>
      </ContentWrapper>
    </WeatherTodayWrapper>
  )
}
