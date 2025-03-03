import Header from '@components/Header'
import Main from '@components/Main'
import WeatherDisplay from '@components/WeatherDisplay'
import WeatherDisplayTime from '@components/WeatherDisplayTime'
import { TypeWeatherConst } from '@src/context/TypeWeatherContext/const'
import { useTypeWeatherContext } from '@src/hooks/useTypeWeatherContext'

import { ContainerApp, WrapperApp } from './styled'

export default function App() {
  const { typeWeather } = useTypeWeatherContext()

  return (
    <ContainerApp>
      <WrapperApp>
        <Header />
        <Main />
      </WrapperApp>
      {typeWeather === TypeWeatherConst.Daily ? (
        <WeatherDisplay />
      ) : (
        <WeatherDisplayTime />
      )}
    </ContainerApp>
  )
}
