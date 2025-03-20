import { allTypeWeather, image } from '@src/constants'

export function findCurrentTypeWeather(typeWeather: string) {
  const {
    backgroundDefault,
    backgroundSunny,
    backgroundCloudy,
    backgroundRainy,
    backgroundSnow,
    backgroundMist,
    backgroundThunderstorm,
    backgroundBlizzard,
    backgroundOvercast,
  } = image.globalBackground

  let backgroundWeatherImage = backgroundDefault
  for (const [key, values] of Object.entries(allTypeWeather)) {
    if (values.includes(typeWeather)) {
      switch (key) {
        case 'sunny':
          backgroundWeatherImage = backgroundSunny
          break
        case 'cloudy':
          backgroundWeatherImage = backgroundCloudy
          break
        case 'overcast':
          backgroundWeatherImage = backgroundOvercast
          break
        case 'mist':
          backgroundWeatherImage = backgroundMist
          break
        case 'blizzard':
          backgroundWeatherImage = backgroundBlizzard
          break
        case 'rainy':
          backgroundWeatherImage = backgroundRainy
          break
        case 'snowy':
          backgroundWeatherImage = backgroundSnow
          break
        case 'thunderstorm':
          backgroundWeatherImage = backgroundThunderstorm
          break
        default:
          backgroundWeatherImage = backgroundDefault
      }
    }
  }

  return backgroundWeatherImage
}
