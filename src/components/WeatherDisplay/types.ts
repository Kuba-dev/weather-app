export type WeatherDataCity = {
  forecastday: WeatherDay[]
  cityName: string
}

export type WeatherDay = {
  date_epoch: string
  date: string
  day: Day
  hour: Hour[]
}

type Day = {
  avgtemp_c: number
  condition: {
    text: string
    icon: string
  }
}

type Hour = {
  temp_c: number
  time: string
  time_epoch: string
  condition: {
    icon: string
  }
}

export type WeatherData = {
  isLoading: boolean
  error: string
  weatherWeekData: WeatherDataCity
}
