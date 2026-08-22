import { devices } from '@playwright/test'
import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm preview',
		url: 'http://localhost:4321',
		reuseExistingServer: !process.env.CI
	},
	workers: process.env.CI ? 5 : undefined,
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
			}
		},
		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox']
			}
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		},
		{
			name: 'Mobile Safari',
			use: {
				...devices['iPhone 13']
			}
		},
		{
			name: 'Mobile Chrome',
			use: {
				...devices['Pixel 5']
			}
		}
	]
}

export default config
