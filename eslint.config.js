// eslint.config.js
import js from '@eslint/js'
import astroPlugin from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'
import prettierConfig from 'eslint-config-prettier'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
	js.configs.recommended,
	// Configuración para archivos JavaScript
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-multiple-empty-lines': 'off',
			'no-tabs': 'off',
			indent: ['warn', 'tab'],
			quotes: ['warn', 'single'],
			'jsx-quotes': ['warn', 'prefer-single'],
			'eol-last': 'off'
		}
	},
	// Configuración específica para archivos TypeScript
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		plugins: {
			'@typescript-eslint': typescript
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-multiple-empty-lines': 'off',
			'no-tabs': 'off',
			indent: ['warn', 'tab'],
			quotes: ['warn', 'single'],
			'eol-last': 'off'
		}
	},
	// Configuración específica para archivos TSX
	{
		files: ['**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				// Permitir el uso de 'window' en archivos TSX
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': typescript
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-multiple-empty-lines': 'off',
			'no-tabs': 'off',
			indent: ['warn', 'tab'],
			quotes: ['warn', 'single'],
			'jsx-quotes': ['warn', 'prefer-single'],
			'eol-last': 'off',
			// Desactivar regla no-undef para permitir comprobaciones condicionales de window
			'no-undef': 'off'
		}
	},
	{
		// Configuración para archivos .astro
		files: ['**/*.astro'],
		plugins: {
			astro: astroPlugin
		},
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				extraFileExtensions: ['.astro'],
				parser: '@typescript-eslint/parser'
			}
		},
		rules: {
			'astro/no-set-html-directive': 'error'
		}
	},
	{
		ignores: [
			'node_modules/**',
			'dist/**',
			'.output/**',
			'.astro/**',
			'.vscode/**',
			'public/**',
			'screenshots/**',
			'test-results/**',
			'src/env.d.ts'
		]
	},
	// Apply prettier config at the end to override other rules
	prettierConfig
]
