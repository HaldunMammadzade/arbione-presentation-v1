// Vector PDF export of the deck (always light mode).
// Usage: node scripts/export-pdf.js [az|en|ru|all] [baseUrl]
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const arg = (process.argv[2] || 'az').toLowerCase();
const base = process.argv[3] || 'http://localhost:3000';
const langs = arg === 'all' ? ['az', 'en', 'ru'] : [arg];

// Falls back to an installed Chrome / Edge when puppeteer's own browser is missing.
function systemBrowser() {
  const local = process.env.LOCALAPPDATA || '';
  return [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    path.join(local, 'Google/Chrome/Application/chrome.exe'),
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
  ].find((p) => p && fs.existsSync(p));
}

async function launch() {
  try {
    return await puppeteer.launch({ headless: 'new' });
  } catch (e) {
    const executablePath = systemBrowser();
    if (!executablePath) throw e;
    return puppeteer.launch({ headless: 'new', executablePath });
  }
}

(async () => {
  const browser = await launch();
  try {
    for (const lang of langs) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
      await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
      await page.goto(`${base}/print?export=1&lang=${lang}`, { waitUntil: 'networkidle0', timeout: 120000 });
      await page.emulateMediaType('print');
      await page.evaluate(async () => {
        document.documentElement.classList.remove('dark');
        await document.fonts.ready;
        await Promise.all(
          [...document.images].filter((img) => !img.complete).map((img) => new Promise((r) => { img.onload = img.onerror = r; }))
        );
      });
      await new Promise((r) => setTimeout(r, 1500));
      const out = path.join(__dirname, `../arbione-presentation-${lang}.pdf`);
      await page.pdf({ path: out, width: '1920px', height: '1080px', printBackground: true, preferCSSPageSize: true });
      console.log(`PDF saved: ${out}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})();
