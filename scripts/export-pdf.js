const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 Starting PDF export...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  
  const totalSlides = 19;
  const screenshots = [];
  
  for (let i = 0; i < totalSlides; i++) {
    console.log(`📸 Capturing slide ${i + 1}/${totalSlides}`);
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    for (let j = 0; j < i; j++) {
      await page.keyboard.press('ArrowRight');
      await new Promise(r => setTimeout(r, 300));
    }
    
    await new Promise(r => setTimeout(r, 2500));
    
    const shotPath = path.join(__dirname, `../public/slide-${String(i).padStart(2, '0')}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });
    screenshots.push(shotPath);
  }
  
  console.log('📄 Building PDF...');
  const pdfPage = await browser.newPage();
  const html = `
    <html><body style="margin:0;padding:0;">
    ${screenshots.map(s => `<img src="file://${s}" style="width:100%;display:block;page-break-after:always;">`).join('')}
    </body></html>
  `;
  await pdfPage.setContent(html);
  await pdfPage.pdf({
    path: path.join(__dirname, '../arbione-presentation.pdf'),
    width: '1920px',
    height: '1080px',
    printBackground: true,
  });
  
  await browser.close();
  console.log('✅ PDF saved as arbione-presentation.pdf');
})();
