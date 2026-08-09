const https = require('https');

const candidates = [
  "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2000&auto=format&fit=crop", // industries hero
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop", // industries hero alt
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop", // about hero (machinery/lab)
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop", // about hero alt
  "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=1200&auto=format&fit=crop", // about story
  "https://images.unsplash.com/photo-1615486171448-4228af4214f4?q=80&w=1200&auto=format&fit=crop", // about story alt
  "https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&q=80&w=1200", // dark takeaway cup
  "https://images.unsplash.com/photo-1551887196-72e32cb14747?auto=format&fit=crop&q=80&w=1200", // cup alt
  "https://images.unsplash.com/photo-1610419266652-30018a38a7b3?q=80&w=2000&auto=format&fit=crop", // checking the old one again just in case
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
  const results = await Promise.all(candidates.map(checkUrl));
  console.log(JSON.stringify(results, null, 2));
}

run();