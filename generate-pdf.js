const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF(inputFile, outputFile) {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Charge le fichier HTML local
  const filePath = 'file://' + path.resolve(__dirname, inputFile);
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  // Génère le PDF au format A4
  await page.pdf({
    path: outputFile,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log(`✅ ${outputFile} généré avec succès`);
}

(async () => {
  await generatePDF('index.html', 'cv.fr.pdf');
  await generatePDF('index.en.html', 'cv.en.pdf');
})();
