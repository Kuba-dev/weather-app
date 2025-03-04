import Header from '@components/Header'
import Main from '@components/Main'
import WeatherDisplay from '@components/WeatherDisplay'
import WeatherDisplayTime from '@components/WeatherDisplayTime'
import { TypeWeatherConst } from '@src/constants'
import { SetStateAction, useState } from 'react'

import { ContainerApp, WrapperApp } from './styled'

export default function App() {
  const [typeWeather, setTypeWeather] = useState(TypeWeatherConst.Daily)

  const handleClick = (type: SetStateAction<TypeWeatherConst>) => {
    setTypeWeather(type)
  }

  const handleClickHourly = () => handleClick(TypeWeatherConst.Hourly)
  const handleClickDaily = () => handleClick(TypeWeatherConst.Daily)

  return (
    <ContainerApp>
      <WrapperApp>
        <Header />
        <Main
          handleClickHourly={handleClickHourly}
          handleClickDaily={handleClickDaily}
        />
      </WrapperApp>
      {typeWeather === TypeWeatherConst.Daily ? (
        <WeatherDisplay />
      ) : (
        <WeatherDisplayTime />
      )}
    </ContainerApp>
  )
}
