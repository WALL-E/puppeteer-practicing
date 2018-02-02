#!/usr/local/bin/node

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
        headless: false,
        slowMo:10,
        ignoreHTTPSErrors: true
    });
    const page = await browser.newPage();
    await page.setViewport({
    	width: 1920,
    	height: 1080
    })
    await page.goto('http://new-resthub.qianbao.com/');
    await page.waitFor('input[name=username]')
    await page.waitFor('input[name=password]')
    let name = await page.$('input[name=username]')
    let password = await page.$('input[name=password]')
    await name.type('zhangzheng@umbrella.com');
    await password.type('ci@admin');

    const inputElement = await page.$('button[type=button]');
    await inputElement.click();
    // browser.close();
})();
