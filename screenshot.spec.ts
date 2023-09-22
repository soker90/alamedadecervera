import * as fs from 'fs'
import * as cheerio from 'cheerio'
import { test } from '@playwright/test'
import { argosScreenshot } from '@argos-ci/playwright'

// Constants:
const siteUrl = 'http://localhost:4321'
const sitemapPath = './.vercel/output/static/sitemap-0.xml'
const stylesheetPath = './screenshot.css'
const stylesheet = fs.readFileSync(stylesheetPath).toString()

function extractSitemapPathnames(sitemapPath: string): string[] {
	const sitemap = fs.readFileSync(sitemapPath).toString()
	const $ = cheerio.load(sitemap, { xmlMode: true })
	const urls: string[] = []
	$('loc').each(function handleLoc() {
		urls.push($(this).text())
	})
	return urls.map((url) => new URL(url).pathname)
}

function pathnameToArgosName(browserName: string, pathname: string): string {
	return `${browserName}/${pathname.replace(/^\/|\/$/g, '') || 'index'}`
}

function screenshotPathname(pathname: string) {
	test(`pathname ${pathname}`, async ({ page, browserName }) => {
		const url = siteUrl + pathname
		await page.goto(url)
		await page.waitForLoadState('networkidle') // Wait redirect pages
		await page.addStyleTag({ content: stylesheet })
		await argosScreenshot(page, pathnameToArgosName(browserName, pathname))
	})
}

test.describe('Site screenshots', () => {
	const pathnames = extractSitemapPathnames(sitemapPath)
	console.log('Pathnames to screenshot:', pathnames)
	pathnames.forEach(screenshotPathname)
})
