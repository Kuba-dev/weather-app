import { memo } from 'react'

import { image } from '@src/constants'
import { Wrapper } from '@src/style/shared'
import WeatherItem from '@components/WeatherItem'
import WeatherTodayDisplay from '@components/WeatherTodayDisplay'

import { WeatherTimeWrapper } from './styled'

const weatherTimes = [
  { id: 1, time: '00:00', icon: image.sunnyWeather, temperature: 10 },
  { id: 2, time: '02:00', icon: image.sunnyWeather, temperature: 11 },
  { id: 3, time: '04:00', icon: image.sunnyWeather, temperature: 12 },
  { id: 4, time: '06:00', icon: image.sunnyWeather, temperature: 13 },
  { id: 5, time: '08:00', icon: image.sunnyWeather, temperature: 14 },
  { id: 6, time: '10:00', icon: image.sunnyWeather, temperature: 15 },
  { id: 7, time: '12:00', icon: image.sunnyWeather, temperature: 16 },
  { id: 8, time: '14:00', icon: image.sunnyWeather, temperature: 17 },
  { id: 9, time: '14:00', icon: image.sunnyWeather, temperature: 17 },
  { id: 10, time: '14:00', icon: image.sunnyWeather, temperature: 17 },
  { id: 11, time: '14:00', icon: image.sunnyWeather, temperature: 17 },
  { id: 12, time: '14:00', icon: image.sunnyWeather, temperature: 17 },
  { id: 13, time: '14:00', icon: image.sunnyWeather, temperature: 17 },
]

export default memo(function WeatherDisplayTime() {
  return (
    <Wrapper>
      <WeatherTodayDisplay temperature={10} weatherIcon={image.sunnyWeather} />
      <WeatherTimeWrapper>
        {weatherTimes.map(({ id, time, icon, temperature }) => (
          <WeatherItem
            key={id}
            dayWeek={time}
            temperature={temperature}
            image={icon}
          />
        ))}
      </WeatherTimeWrapper>
    </Wrapper>
  )
})
