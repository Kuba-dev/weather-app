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
