import { WeatherDay } from '@src/components/WeatherDisplay/types'

export function flattenWeatherData(data: WeatherDay) {
  return {
    date: data.date,
    date_epoch: data.date_epoch,
    avgtemp_c: data.day.avgtemp_c,
    icon: data.day.condition.icon,
  }
}
