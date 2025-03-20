import { memo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Clock from '@src/components/Clock'
import SearchCity from '@src/components/SearchCity'
import WeatherDisplay from '@src/components/WeatherDisplay'
import WeatherDisplayTime from '@src/components/WeatherDisplayTime'
import { LinksPages, TypeWeatherConst } from '@src/constants'
import { useWeatherType } from '@src/hooks'

import { ContainerApp, Wrapper, WrapperBlured } from './styled'

export default memo(function Layout() {
  const { typeWeather } = useWeatherType()
  const location = useLocation()
  const isPathnameEqualHome = location.pathname === '/' + LinksPages.home

  return (
    <ContainerApp>
      <WrapperBlured>
        <Wrapper>
          <Clock />
          {isPathnameEqualHome && <SearchCity />}
        </Wrapper>
        <Outlet />
      </WrapperBlured>
      {isPathnameEqualHome &&
        (typeWeather.type === TypeWeatherConst.DAILY ? (
          <WeatherDisplay />
        ) : (
          <WeatherDisplayTime />
        ))}
    </ContainerApp>
  )
})
