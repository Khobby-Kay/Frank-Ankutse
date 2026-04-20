import https from 'https';
import fs from 'fs';

const id = '1ExOyddyNRZ6D9QwhL3cXNsqgssABiEfJ';
const url = `https://drive.google.com/uc?export=download&id=${id}`;

function get(u: string) {
  console.log('Fetching:', u);
  https.get(u, (res) => {
    console.log('Status:', res.statusCode);
    console.log('Headers:', JSON.stringify(res.headers, null, 2));
    
    if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      get(res.headers.location);
      return;
    }

    const file = fs.createWriteStream('public/test-hero.jpg');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Done test-hero.jpg');
    });
  }).on('error', (e) => console.error(e));
}

get(url);
