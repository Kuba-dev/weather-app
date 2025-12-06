import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

import 'dotenv/config'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor())
    },
    baseUrl: 'http://localhost:5173',
  },
})
