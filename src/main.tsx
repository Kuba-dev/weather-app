import App from '@src/components/App'
import Global from '@style/reset'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './store/store'
import { baseTheme } from './style/theme'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <Global />
        <SessionContextProvider supabaseClient={supabase}>
          <App />
        </SessionContextProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
