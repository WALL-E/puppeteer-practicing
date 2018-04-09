#!/usr/local/bin/node
/**
 * @name alerts
 *
 * @desc Create an alert dialog and close it again.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-dialog}
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
  page.on('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.dismiss()
  })
  await page.evaluate(() => alert('This message is inside an alert box'))
  await browser.close()
})()
