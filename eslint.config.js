// eslint.config.js
import js from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-multiple-empty-lines': 'off',
      'no-tabs': 'off',
      'indent': ['warn', 'tab'],
      'quotes': ['warn', 'single'],
      'jsx-quotes': ['warn', 'prefer-single'],
      'eol-last': 'off',
    },
  },
  {
    // Configuración para archivos .astro
    files: ['**/*.astro'],
    plugins: {
      astro: astroPlugin,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: '@typescript-eslint/parser',
      },
    },
    rules: {
      'astro/no-set-html-directive': 'error',
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.astro/**',
      '.vscode/**',
      'public/**',
      'screenshots/**',
      'test-results/**'
    ],
  },
  // Apply prettier config at the end to override other rules
  prettierConfig
];
