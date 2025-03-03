import { useState } from 'react'

import { TypeWeatherConst } from './const'
import { TypeWeather, WeatherCategory } from './types'

export const useCreateTypeWeatherContext = function (): TypeWeather {
  const [typeWeather, setTypeWeather] = useState<WeatherCategory>(
    TypeWeatherConst.Hourly,
  )

  const handleClick = (type: WeatherCategory) => setTypeWeather(type)

  return {
    typeWeather,
    handleClick,
  }
}
