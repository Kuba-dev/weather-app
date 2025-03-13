import { image } from '@src/constants'
import { useTypedSelector } from '@src/hooks'
import Global from '@style/reset'

export default function GlobalWithRedux() {
  const weekWeather = useTypedSelector(
    state => state.weatherWeek.weatherWeekData.forecastday[0],
  )
  const typeWeather = weekWeather?.day.condition.text
  let backgroundWeatherImage = image.backgroundDefault

  switch (typeWeather) {
    case 'Sunny':
      backgroundWeatherImage = image.backgroundSunny
      break
    case 'Cloudy':
      backgroundWeatherImage = image.backgroundCloudy
      break
    case 'Rain':
      backgroundWeatherImage = image.backgroundRainy
      break
    default:
      backgroundWeatherImage = image.backgroundDefault
      break
  }

  return <Global backgroundWeatherImage={backgroundWeatherImage} />
}
