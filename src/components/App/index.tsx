// import { useEffect } from 'react'

// import { TypeWeatherConst } from '@src/constants'
// import { useFetchCityCurrentWeather, useWeatherType } from '@src/hooks'
// import Header from '@components/Header'
// import Main from '@components/Main'
// import WeatherDisplay from '@components/WeatherDisplay'
// import WeatherDisplayTime from '@components/WeatherDisplayTime'

// import { ContainerApp, WrapperApp } from './styled'

// export default function App() {
//   const { typeWeather } = useWeatherType()
//   const { fetchCityCurrentWeather } = useFetchCityCurrentWeather()
//   useEffect(() => {
//     fetchCityCurrentWeather()
//   }, [fetchCityCurrentWeather])

//   return (
//     <ContainerApp>
//       <WrapperApp>
//         <Header />
//         <Main />
//       </WrapperApp>
//       {typeWeather.type === TypeWeatherConst.DAILY ? (
//         <WeatherDisplay />
//       ) : (
//         <WeatherDisplayTime />
//       )}
//     </ContainerApp>
//   )
// }
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LinksPages } from '@src/constants'
import Layout from '@src/page/Layout'

import Loading from '../Loading'

const Home = lazy(() => import('@src/page/Home'))
const ErrorPage = lazy(() => import('@src/page/Error'))

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={LinksPages.default} element={<Layout />}>
          <Route index element={<Navigate to={LinksPages.home} />} />
          <Route path={LinksPages.home} element={<Home />} />
          <Route path={LinksPages.error} element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
