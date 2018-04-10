# Puppeteer

Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.

## Chromium vs Chrome

* Chromium
  * Open Source
* Chrome
  * Closed Source

## DevTools Protocol

aka Chrome Remote Debugging Protocol.

The Chrome DevTools Protocol allows for tools to instrument, inspect, debug and profile Chromium, Chrome and other Blink-based browsers. Many existing projects currently use the protocol. The Chrome DevTools uses this protocol and the team maintains its API.

* The latest (tip-of-tree) protocol (tot)
* v8-inspector protocol (v8)
* stable 1.2 protocol (1-2)
* stable 1.3 protocol (1-3)

### DevTools tooling and ecosystem

* vue-devtools
* Angular Batarang
* VS Code - Debugger for Chrome
* Sublime Web Inspector
* **puppeteer**
* More and More

## Why is the Chrome team building Puppeteer

The goals of the project are simple:

* Provide a slim, canonical library that highlights the capabilities of the DevTools Protocol.
* Provide a reference implementation for similar testing libraries. Eventually, these other frameworks could adopt Puppeteer as their foundational layer.
* Grow the adoption of headless/automated browser testing.
* Help dogfood new DevTools Protocol features...and catch bugs!
* **Learn** more about the pain points of automated browser testing and help **fill** those gaps.

## Objects

### Puppeteer Instance

Puppeteer module provides a method to launch a Chromium instance.

### BrowserFetcher

BrowserFetcher can download and manage different versions of Chromium.

### Browser

A Browser is created when Puppeteer connects to a Chromium instance

### Page

### Keyboard

Keyboard provides an api for managing a virtual keyboard.

### Mouse

### Touchscreen

### Tracing

You can use tracing.start and tracing.stop to create a trace file which can be opened in Chrome DevTools or timeline viewer.

### Dialog

Dialog objects are dispatched by page via the 'dialog' event.

### ConsoleMessage

ConsoleMessage objects are dispatched by page via the 'console' event.

### Frame

At every point of time, page exposes its current frame tree via the page.mainFrame()

### ExecutionContext

The class represents a context for JavaScript execution.

### JSHandle

JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluateHandle method.

### ElementHandle

ElementHandle represents an in-page DOM element. ElementHandles can be created with the page.$ method.

### Request

### Response

Response class represents responses which are received by page.

### SecurityDetails

SecurityDetails class represents responses which are received by page.

### Target

Creates a Chrome Devtools Protocol session attached to the target.

### CDPSession

The CDPSession instances are used to talk raw Chrome Devtools Protocol

### Coverage

Coverage gathers information about parts of JavaScript and CSS that were used by the page.