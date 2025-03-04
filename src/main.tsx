import App from '@src/components/App'
import Global from '@style/reset'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { baseTheme } from './style/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={baseTheme}>
      <Global />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
