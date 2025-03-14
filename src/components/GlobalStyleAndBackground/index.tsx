import { image } from '@src/constants'
import { useTypedSelector } from '@src/hooks'
import Global from '@style/reset'

export default function GlobalStyleAndBackground() {
  const weekWeather = useTypedSelector(
    state => state.weatherWeek.weatherWeekData.forecastday[0],
  )
  const {
    backgroundDefault,
    backgroundCloudy,
    backgroundRainy,
    backgroundSunny,
  } = image.globalBackground

  const typeWeather = weekWeather?.day.condition.text
  let backgroundWeatherImage = backgroundDefault

  switch (typeWeather) {
    case 'Sunny':
      backgroundWeatherImage = backgroundSunny
      break
    case 'Cloudy':
      backgroundWeatherImage = backgroundCloudy
      break
    case 'Rain':
      backgroundWeatherImage = backgroundRainy
      break
    default:
      backgroundWeatherImage = backgroundDefault
      break
  }

  return <Global backgroundWeatherImage={backgroundWeatherImage} />
}
