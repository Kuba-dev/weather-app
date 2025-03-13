import { useTypedSelector } from '@src/hooks'

import { WeatherData } from '../WeatherDisplay/types'

import {
  ContentWrapper,
  ImageWeather,
  Title,
  TitleWrapper,
  WeatherTodayWrapper,
} from './styled'

export default function WeatherTodayDisplay() {
  const {
    weatherWeekData: { forecastday, cityName },
  }: WeatherData = useTypedSelector(state => state.weatherWeek)

  const {
    day: {
      avgtemp_c,
      condition: { icon },
    },
  } = forecastday[0]

  return (
    <WeatherTodayWrapper>
      <Title>{cityName}</Title>
      <ContentWrapper>
        <ImageWeather src={icon} alt='weather icon' />
        <TitleWrapper>
          <Title>Today</Title>
          <Title>{Math.round(avgtemp_c)}°C</Title>
        </TitleWrapper>
      </ContentWrapper>
    </WeatherTodayWrapper>
  )
}
