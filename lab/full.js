#!/usr/local/bin/node

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
        headless: false,
        slowMo: 10,
        ignoreHTTPSErrors: true,
        args: ['--start-fullscreen']
    });

    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080
    })
    //await page.emulate(devices['iPhone 6']);
    await page.goto('https://www.jd.com/');
    page.evaluate(_ => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.screenshot({path: 'full.png', fullPage: true});
    //await browser.close();
})();
