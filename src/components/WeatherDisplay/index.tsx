import { memo } from 'react'

import { ErrorCodeGeoposition } from '@src/constants'
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
    weatherWeekData: { forecastday },
  }: WeatherData = useTypedSelector(state => state.weatherWeek)
  const currentCity = useTypedSelector(state => state.currentCity)

  if (error) {
    return (
      <Wrapper>
        <Title>{error}</Title>
      </Wrapper>
    )
  }

  switch (currentCity.errorCode) {
    case ErrorCodeGeoposition.PERMISSION_DENIED: {
      return (
        <Wrapper>
          <Title>
            Please allow location access to get the current weather.
          </Title>
        </Wrapper>
      )
    }
    case ErrorCodeGeoposition.POSITION_UNAVAILABLE: {
      return (
        <Wrapper>
          <Title>Unable to get your current location.</Title>
        </Wrapper>
      )
    }
    case ErrorCodeGeoposition.TIMEOUT: {
      return (
        <Wrapper>
          <Title>Location request timed out.</Title>
        </Wrapper>
      )
    }
    default: {
      break
    }
  }

  if (isLoading || currentCity.isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }

  const weekWeather = Object.values(forecastday).slice(1)

  return (
    <Wrapper>
      <WeatherDailyWrapper>
        <WeatherTodayDisplay />
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
