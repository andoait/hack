import js from '@eslint/js'
import globals from 'globals'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, '@typescript-eslint': tsPlugin },
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'quotes': ['error', 'single', { avoidEscape: true }]
    }
  }
])
