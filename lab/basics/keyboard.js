#!/usr/local/bin/node
/**
 * @name keyboard
 *
 * @desc types into a text editor
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagehoverselector}
 */
const puppeteer = require('puppeteer');

function sleep(ms){
  return new Promise(resolve=>{
    setTimeout(resolve,ms)
  })
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
    headless: false,
    slowMo: 10,
    ignoreHTTPSErrors: true,
    args: ['--start-fullscreen']
  });

  const page = await browser.newPage()
    await page.setViewport({
    width: 1080,
    height: 1920
  })

  await page.goto('https://www.baidu.com/')
  await page.focus('#kw')
  await page.keyboard.type('电影')
  const inputElement = await page.$('#su')
  await inputElement.click()
  await sleep(2000)
  await page.screenshot({ path: 'keyboard.png' })
  await browser.close()
})()
