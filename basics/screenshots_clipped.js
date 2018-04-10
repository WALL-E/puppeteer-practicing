#!/usr/local/bin/node
/**
 * @name screenshots clipped
 *
 * @desc Grabs and clips out just the stock tickers on the Yahoo finance page
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#screenshot}
 */
const viewPort = { width: 1280, height: 800 }
const options = {
  path: 'clipped_stocktickers.png',
  fullPage: false,
  clip: {
    x: 120,
    y: 140,
    width: 1000,
    height: 200
  }
}

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
  await page.setViewport(viewPort)
  await page.goto('https://www.baidu.com/')
  await page.screenshot(options)
  await browser.close()
  console.log("open clipped_stocktickers.png")
})()
