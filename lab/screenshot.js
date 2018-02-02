#!/usr/local/bin/node

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
        headless: false,
        slowMo:250
    });
    const page = await browser.newPage();
    await page.goto('http://www.baidu.com/');
    await page.screenshot({path: 'www.baidu.com.png'});
    browser.close();
})();
