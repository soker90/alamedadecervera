import * as fs from 'fs'
import * as cheerio from 'cheerio'
import { test } from '@playwright/test'
import { argosScreenshot } from '@argos-ci/playwright'

// Constants:
const siteUrl = 'http://localhost:3000'
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

function pathnameToArgosName(pathname: string): string {
	return pathname.replace(/^\/|\/$/g, '') || 'index'
}


function screenshotPathname(pathname: string) {
	test(`pathname ${pathname}`, async ({ page }) => {
		const url = siteUrl + pathname
		await page.goto(url)
		await page.addStyleTag({ content: stylesheet })
		await argosScreenshot(page, pathnameToArgosName(pathname))
	})
}

test.describe('Docusaurus site screenshots', () => {
	const pathnames = extractSitemapPathnames(sitemapPath)
	console.log('Pathnames to screenshot:', pathnames)
	pathnames.forEach(screenshotPathname)
})
