import App from '@src/components/App'
import Global from '@style/reset'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { TypeWeatherProvider } from './context/TypeWeatherContext/TypeWeatherContextProvider'
import { baseTheme } from './style/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={baseTheme}>
      <TypeWeatherProvider>
        <Global />
        <App />
      </TypeWeatherProvider>
    </ThemeProvider>
  </StrictMode>,
)
