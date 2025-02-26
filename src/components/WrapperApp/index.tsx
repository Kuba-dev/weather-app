import Global from '@style/reset'
import { PropsWithChildren } from 'react'

export default function WrapperApp({ children }: PropsWithChildren) {
  return (
    <>
      <Global />
      {children}
    </>
  )
}
