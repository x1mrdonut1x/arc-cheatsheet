import { tanstackConfig } from '@tanstack/eslint-config'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    ignores: ['*.config.js', '*.config.ts'],
  },
  ...tanstackConfig,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'import/order': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
