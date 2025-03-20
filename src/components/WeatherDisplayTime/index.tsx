import { memo } from 'react'

import { ErrorCodeGeoposition } from '@src/constants'
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

  const { hour } = forecastday[0]

  return (
    <Wrapper>
      <WeatherTodayDisplay />
      <WeatherTimeWrapper>
        {hour.map(({ temp_c, time, time_epoch, condition: { icon } }) => (
          <WeatherItem
            key={time_epoch}
            time={getTimeFromDate(time)}
            temperature={Math.round(temp_c)}
            image={icon}
          />
        ))}
      </WeatherTimeWrapper>
    </Wrapper>
  )
})
