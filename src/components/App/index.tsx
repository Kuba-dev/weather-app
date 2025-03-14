import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from '@src/components/Layout'
import { LinksPages } from '@src/constants'

import Loading from '../Loading'

const Home = lazy(() => import('@src/page/Home'))
const ErrorPage = lazy(() => import('@src/page/Error'))
const NotFoundPage = lazy(() => import('@src/page/NotFoundPage'))

const pageList = [
  { id: 1, href: 'home', Page: Home },
  { id: 2, href: 'error', Page: ErrorPage },
]
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={LinksPages.default} element={<Layout />}>
          <Route index element={<Navigate to={LinksPages.home} />} />
          {pageList.map(({ id, href, Page }) => {
            return (
              <Route
                key={id}
                path={LinksPages[href as keyof typeof LinksPages]}
                element={<Page />}
              />
            )
          })}
          <Route path={LinksPages.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
