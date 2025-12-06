import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  {
    ignores: [
      'dist/',
      'jest.config.ts',
      'lint-staged.config.js',
      'commitlint.config.js',
      'vite.config.ts',
      'cypress/',
      'cypress.config.ts',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      eslintPluginPrettierRecommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^\\w'],

            [
              '^@src(/.*|$)',
              '^@public(/.*|$)',
              '^@components(/.*|$)',
              '^@constants(/.*|$)',
              '^@assets(/.*|$)',
              '^@pages(/.*|$)',
              '^@store(/.*|$)',
              '^@utils(/.*|$)',
              '^@style(/.*|$)',
            ],

            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

            ['^.+\\.?(css)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
)
