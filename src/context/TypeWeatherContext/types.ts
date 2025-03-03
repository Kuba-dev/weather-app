export type WeatherCategory = 'DAILY' | 'HOURLY'

export type TypeWeather = {
  typeWeather: WeatherCategory
  handleClick: (type: WeatherCategory) => void
}
