import { useState } from 'react'

import { TypeWeather } from './types'

export const useCreateTypeWeatherContext = function (): TypeWeather {
  const [typeWeather, setTypeWeather] = useState<'Daily' | 'Hourly'>('Daily')

  const handleClickDaily = () => setTypeWeather('Daily')
  const handleClickHourly = () => setTypeWeather('Hourly')

  return {
    typeWeather,
    handleClickDaily,
    handleClickHourly,
  }
}
