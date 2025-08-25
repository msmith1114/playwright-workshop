const assert = require('node:assert');
const { chromium, devices } = require('playwright');

// Shorthand to immediately call this function (IIFE)
(async () => {
  // Create a shared instance of the browser (Chromium in this case).
  const browser = await chromium.launch({ headless: false }); 
  // Create a browser context/session — like an incognito window. Isolated cookies/storage.
  const context = await browser.newContext();
  // Create a single tab or page within the context.
  const page = await context.newPage();

  // Navigate and interact
  await page.goto("www.google.com");

  // Close browser
  await browser.close();
})();
