import Header from '@components/Header'
import Menu from '@components/Menu'
import WeatherDisplay from '@components/WeatherDisplay'

import { ContainerApp, WrapperApp } from './styled'

export default function App() {
  return (
    <ContainerApp>
      <WrapperApp>
        <Header />
        <Menu />
      </WrapperApp>
      <WeatherDisplay />
    </ContainerApp>
  )
}
