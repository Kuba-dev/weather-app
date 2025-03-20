import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyleAndBackground from '@src/components/GlobalStyleAndBackground'
import App from '@components/App'
import ErrorBoundary from '@components/ErrorBoundary'

import { store } from './store/store'
import { baseTheme } from './style/theme'

import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyleAndBackground />
        <BrowserRouter>
          <ErrorBoundary>
            <SessionContextProvider supabaseClient={supabase}>
              <App />
            </SessionContextProvider>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)

interface CypressWithStore extends Cypress.Cypress {
  store?: typeof store
}

declare global {
  interface Window {
    Cypress?: CypressWithStore
  }
}

if (typeof window !== 'undefined' && window.Cypress) {
  window.Cypress.store = store
}
