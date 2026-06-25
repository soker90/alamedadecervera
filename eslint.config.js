import neostandard from 'neostandard'
import astro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

const unusedVars = {
	argsIgnorePattern: '^_',
	varsIgnorePattern: '^_',
	caughtErrorsIgnorePattern: '^_'
}

export default [
	{
		ignores: ['dist/', '.vercel/', '.astro/', 'node_modules/']
	},
	// StandardJS rules (flat-config successor of eslint-config-standard) with
	// TypeScript support. Styling rules are disabled because Prettier owns formatting.
	...neostandard({
		ts: true,
		noStyle: true
	}),
	// Astro flat-config recommended rules.
	...astro.configs['flat/recommended'],
	// Soften unused-vars to warnings with `_`-prefix ignores (matches the
	// previous .eslintrc behaviour).
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		rules: {
			'no-unused-vars': ['warn', unusedVars]
		}
	},
	{
		files: ['**/*.{ts,tsx,astro}'],
		plugins: { '@typescript-eslint': tseslint.plugin },
		rules: {
			'@typescript-eslint/no-unused-vars': ['warn', unusedVars]
		}
	},
	{
		files: ['**/*.astro'],
		rules: {
			'astro/no-set-html-directive': 'error',
			// React rules from neostandard's bundled eslint-plugin-react are false
			// positives on Astro template syntax (Astro is not React).
			'react/jsx-key': 'off',
			'react/self-closing-comp': 'off'
		}
	}
]
