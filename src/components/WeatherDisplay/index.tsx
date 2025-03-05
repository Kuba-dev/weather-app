import WeatherItem from '@components/WeatherItem'
import WeatherTodayDisplay from '@components/WeatherTodayDisplay'
import { image } from '@src/constants'
import { Wrapper } from '@src/style/shared'
import { memo } from 'react'

import { WeatherDailyWrapper } from './styled'

const weatherWeek = [
  { id: 1, dayWeek: 'Monday', icon: image.sunnyWeather, temperature: 10 },
  { id: 2, dayWeek: 'Tuesday', icon: image.sunnyWeather, temperature: 12 },
  { id: 3, dayWeek: 'Wednesday', icon: image.sunnyWeather, temperature: 14 },
  { id: 4, dayWeek: 'Thursday', icon: image.sunnyWeather, temperature: 13 },
  { id: 5, dayWeek: 'Friday', icon: image.sunnyWeather, temperature: 15 },
  { id: 6, dayWeek: 'Saturday', icon: image.sunnyWeather, temperature: 11 },
]

export default memo(function WeatherDisplay() {
  return (
    <Wrapper>
      <WeatherTodayDisplay temperature={10} weatherIcon={image.sunnyWeather} />
      <WeatherDailyWrapper>
        {weatherWeek.map(({ id, dayWeek, icon, temperature }) => (
          <WeatherItem
            key={id}
            dayWeek={dayWeek}
            temperature={temperature}
            image={icon}
          />
        ))}
      </WeatherDailyWrapper>
    </Wrapper>
  )
})
