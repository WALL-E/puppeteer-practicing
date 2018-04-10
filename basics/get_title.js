#!/usr/local/bin/node
/**
 * @name get title
 *
 * @desc Get the title of a page and print it to the console.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagetitle}
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
    headless: false,
    slowMo: 10,
    ignoreHTTPSErrors: true,
    args: ['--start-fullscreen']
  });

  const page = await browser.newPage()
  await page.goto('https://www.baidu.com/')
  const title = await page.title()
  console.log(title)
  await browser.close()
})()
