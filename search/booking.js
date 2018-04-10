#!/usr/local/bin/node
/**
 * @name Booking.com search
 *
 * @desc Finds accommodations in Berlin on Booking.com, takes a screenshot and logs the top 10.
 */
const screenshot = 'booking_results.png'
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
  await page.setViewport({width: 1920, height: 1280, deviceScaleFactor: 1});
  await page.goto('https://booking.com')
  await page.type('#ss', 'BeiJing')
  await page.click('.sb-searchbox__button')
  await page.waitForSelector('#hotellist_inner')
  await page.screenshot({ path: screenshot })
  const hotels = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('span.sr-hotel__name'))
    return anchors.map(anchor => anchor.textContent.trim()).slice(0, 10)
  })
  console.log(hotels)
  await browser.close()
  console.log('See screenshot: ' + screenshot)
})()
