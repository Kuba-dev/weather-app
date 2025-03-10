import { TypeWeatherConst } from '@src/constants'
import { useWeatherType } from '@src/hooks'
import Header from '@components/Header'
import Main from '@components/Main'
import WeatherDisplay from '@components/WeatherDisplay'
import WeatherDisplayTime from '@components/WeatherDisplayTime'

import { ContainerApp, WrapperApp } from './styled'

export default function App() {
  const { typeWeather } = useWeatherType()

  return (
    <ContainerApp>
      <WrapperApp>
        <Header />
        <Main />
      </WrapperApp>
      {typeWeather.type === TypeWeatherConst.DAILY ? (
        <WeatherDisplay />
      ) : (
        <WeatherDisplayTime />
      )}
    </ContainerApp>
  )
}
