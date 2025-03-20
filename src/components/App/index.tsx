import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from '@src/components/Layout'
import { LinksPages, pageList } from '@src/constants'

import Loading from '../Loading'

const NotFoundPage = lazy(() => import('@src/page/NotFoundPage'))

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
