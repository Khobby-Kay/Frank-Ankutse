import https from 'https';
import fs from 'fs';
import path from 'path';

const mapping = [
  { id: '1ExOyddyNRZ6D9QwhL3cXNsqgssABiEfJ', filename: 'hero-frank.jpg' },
  { id: '1fZS0O-E6vpW5BxzMXbPxSvHS719-6H2g', filename: 'about-frank.jpg' },
  { id: '1UVeSvSRFL4WP7RKB5udoFxKEwik-_6-E', filename: 'campaign-1.jpg' },
  { id: '1m7hQZzEUeDxM-nPqK8qWn3I_hKGYYW1Q', filename: 'campaign-2.jpg' }
];

async function download(id: string, filename: string) {
  const filePath = path.join('public', filename);
  const url = `https://docs.google.com/uc?export=download&id=${id}`;

  return new Promise<void>((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        https.get(res.headers.location!, (res2) => {
           // If it redirects to login again, we give up
           if (res2.headers.location?.includes('ServiceLogin')) {
              reject(new Error('Auth required'));
              return;
           }
           const file = fs.createWriteStream(filePath);
           res2.pipe(file);
           file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Success: ${filename}`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const m of mapping) {
    try {
      await download(m.id, m.filename);
    } catch (e: any) {
      console.error(`Error ${m.filename}: ${e.message}`);
    }
  }
}

run();
