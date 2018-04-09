#!/usr/local/bin/node

const puppeteer = require('puppeteer');

function sleep(ms){
     return new Promise(resolve=>{
         setTimeout(resolve,ms)
     })
 }

(async() => {

const browser = await puppeteer.launch({
        executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
        headless: true,
        slowMo: 10,
        ignoreHTTPSErrors: true,
        args: ['--start-fullscreen']
});
const page = await browser.newPage();
await page.setViewport({width: 1280, height: 1024, deviceScaleFactor: 1});
await page.goto('https://www.jd.com', {waitUntil: 'networkidle2'});
var innerHeight = await page.evaluate(_ => {return window.innerHeight}),
    height = await page.evaluate(_ => {return document.body.clientHeight});
console.log(height);
console.log("Scrolling");
for(i=0; i<(height/innerHeight); i++) {
    page.evaluate(_ => {
        window.scrollBy(0, window.innerHeight);
    });
    await sleep(2000);
    console.log(i);
}
console.log("Waiting for transfers");
//await page.waitForNavigation({timeout: 5});
await sleep(3000);
console.log("Done.");
var height = await page.evaluate(() => {return document.body.clientHeight});
console.log(height);
await page.pdf({path: 'spa.pdf', width: "1280px", height: height + "px", printBackground: true});
browser.close();
})();
