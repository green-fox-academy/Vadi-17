const https = require('https');

https.get('https://swapi.dev/api/people/1/', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log("ggg");
    alert("ggg");
    console.log(JSON.parse(data).name);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});