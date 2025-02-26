import App from '@src/components/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import WrapperApp from './components/WrapperApp'
import { baseTheme } from './style/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={baseTheme}>
      <WrapperApp>
        <App />
      </WrapperApp>
    </ThemeProvider>
  </StrictMode>,
)
