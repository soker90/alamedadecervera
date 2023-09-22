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
		}
	]
}

export default config
