#!/usr/local/bin/node

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
        headless: false,
        slowMo: 10,
        ignoreHTTPSErrors: true
    });
    const page = await browser.newPage();
    await page.setViewport({
    	width: 1920,
    	height: 1080
    })
    await page.goto('https://new-resthub.qianbao.com/');
    // browser.close();
})();
