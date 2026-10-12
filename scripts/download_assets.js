const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  'img/scoopful-logo.png',
  'img/hero-honey-sundae.jpg',
  'img/pistachio-scoop.jpg',
  'img/cover_dusk.jpg',
  'img/day_exterior.jpg',
  'img/wide_interior.jpg',
  'img/counter_queue.jpg',
  'img/training.jpg',
  'img/coldchain.jpg',
  'assets/favicon-32.png',
  'assets/apple-touch-icon.png'
];

for (let i = 1; i <= 31; i++) {
  const num = String(i).padStart(2, '0');
  assets.push(`img/menu/menu-${num}.jpg`);
}

function downloadFile(urlPath) {
  return new Promise((resolve) => {
    const fullUrl = `https://scoopful.in/${urlPath}`;
    const dest = path.join(__dirname, '..', 'public', urlPath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    const file = fs.createWriteStream(dest);
    https.get(fullUrl, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded: ${urlPath}`);
            resolve(true);
          });
        });
      } else {
        console.warn(`Failed (${response.statusCode}): ${urlPath}`);
        file.close();
        fs.unlinkSync(dest);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${urlPath}: ${err.message}`);
      fs.unlinkSync(dest);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const asset of assets) {
    await downloadFile(asset);
  }
  console.log('All downloads completed.');
}

run();
