import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'semi': ['error', 'never'],                       // no semicolons
      '@typescript-eslint/semi': ['error', 'never'],    // TS-specific
      'comma-dangle': ['error', 'never'],               // no trailing commas
      '@typescript-eslint/comma-dangle': ['error', 'never'], // TS-specific
      'quotes': ['error', 'single', { avoidEscape: true }],  // enforce single quotes
      '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }], // TS-specific
    }
  }
])
