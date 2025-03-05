import App from '@src/components/App'
import Global from '@style/reset'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './store/store'
import { baseTheme } from './style/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <Global />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
