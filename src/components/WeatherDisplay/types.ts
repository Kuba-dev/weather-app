export type WeatherDataCity = {
  forecastday: WeatherDay[]
  cityName: string
}

export type WeatherDay = {
  date: string
  day: {
    avgtemp_c: number
    condition: {
      icon: string
    }
  }
  hour: Hour[]
}

type Hour = {
  temp_c: number
  time: string
  condition: {
    icon: string
  }
}

export type WeatherData = {
  isLoading: boolean
  error: string
  weatherWeekData: WeatherDataCity
}
