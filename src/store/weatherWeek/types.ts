export type GetWeatherWeekAction = {
  payload: {
    lat: number
    lon: number
    cityName: string
  }
  type: string
}
