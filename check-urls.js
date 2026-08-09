const https = require('https');
const http = require('http');

const urls = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1610419266652-30018a38a7b3?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541628951107-a5af53bdc8d4?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587324438673-56c808f921d2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1550907589-94073b64c0db?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=1200"
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, error: e.message });
    });
  });
}

async function run() {
  const results = await Promise.all(urls.map(checkUrl));
  console.log(JSON.stringify(results, null, 2));
}

run();