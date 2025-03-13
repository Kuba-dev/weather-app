import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from '@components/App'
import ErrorBoundary from '@components/ErrorBoundary'
import GlobalWithRedux from '@components/GlobalWithRedux'

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
        <GlobalWithRedux />
        <ErrorBoundary>
          <SessionContextProvider supabaseClient={supabase}>
            <App />
          </SessionContextProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
