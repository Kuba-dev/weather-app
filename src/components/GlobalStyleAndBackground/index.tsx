import { useTypedSelector } from '@src/hooks'
import { findCurrentTypeWeather } from '@src/utils/findCurrentTypeWeather'
import Global from '@style/reset'

export default function GlobalStyleAndBackground() {
  const weekWeather = useTypedSelector(
    state => state.weatherWeek.weatherWeekData.forecastday[0],
  )

  const typeWeather = weekWeather?.day.condition.text
  const backgroundWeatherImage = findCurrentTypeWeather(typeWeather)

  return <Global backgroundWeatherImage={backgroundWeatherImage} />
}
