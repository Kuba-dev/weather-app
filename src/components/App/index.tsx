import Header from '@components/Header'

import { ContainerApp, Main, WrapperApp } from './styled'

export default function App() {
  return (
    <ContainerApp>
      <WrapperApp>
        <Header />
        <Main />
      </WrapperApp>
    </ContainerApp>
  )
}
