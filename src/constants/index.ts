import backgroundImageWeather from '@assets/images/backgroundApp.jpg'
import loading from '@assets/images/loading.gif'
import sunnyWeather from '@assets/images/sunny.svg'

export const image = {
  backgroundImageWeather: backgroundImageWeather,
  sunnyWeather: sunnyWeather,
  loading: loading,
}

export enum TypeWeatherConst {
  DAILY = 'DAILY',
  HOURLY = 'HOURLY',
}
