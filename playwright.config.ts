import { devices } from '@playwright/test'
import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		port: 4321,
		command: 'npm start'
	},
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
