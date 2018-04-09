#!/usr/local/bin/node
/**
 * @name get text value of an element
 *
 * @desc Gets the text value of an element by using the page.evaluate method
 *
 */
const viewPort = { width: 1280, height: 1600 }
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
  await page.tracing.start({path: 'trace.json', categories: ['devtools.timeline']})
  //await page.goto('https://item.jd.com/4585499.html#crumb-wrap')
  await page.goto('https://item.jd.com/11453287793.html')

  const price = await page.evaluate(() => document.querySelector('span.p-price span.price').innerText)
  console.log(price)
  await browser.close()
})()
