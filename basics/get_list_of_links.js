#!/usr/local/bin/node
/**
 * @name get list of links
 *
 * @desc Scrapes Hacker News for links on the home page and returns the top 10
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
  await page.goto('https://m.cnbeta.com/', {waitUntil: "domcontentloaded"})

  // execute standard javascript in the context of the page.
  const stories = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('div#realtime ul li div a'))
    return anchors.map(anchor => anchor.textContent).slice(0, 20)
  })
  console.log(stories)
  await page.tracing.stop();
  await browser.close()
})()
