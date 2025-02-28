import Header from '@components/Header'
import Menu from '@components/Menu'
import WeatherDisplay from '@components/WeatherDisplay'
import WeatherDisplayTime from '@components/WeatherDisplayTime'
import { useTypeWeatherContext } from '@src/hooks/useTypeWeatherContext'

import { ContainerApp, WrapperApp } from './styled'

export default function App() {
  const { typeWeather } = useTypeWeatherContext()

  return (
    <ContainerApp>
      <WrapperApp>
        <Header />
        <Menu />
      </WrapperApp>
      {typeWeather === 'Daily' ? <WeatherDisplay /> : <WeatherDisplayTime />}
    </ContainerApp>
  )
}
