const puppeteer = require('puppeteer');
const sleep = require("await-sleep");
const assert = require('assert').strict;

(async () => {
	let browser;
	try {
		browser = await puppeteer.launch({headless: false});
		const page = await browser.newPage();
		await page.setViewport({width: 1280, height: 720});	  
		await page.goto('http://localhost:4000');
		await sleep(10000); // give time for buffering etc
		assert.equal(await page.$eval("video", video => video.paused), false);
	} catch (e) {
		console.error(e);
	}
	try {
		await browser.close();
	} catch (e) {
		console.error("Please close the browser manually");
	}
})();
