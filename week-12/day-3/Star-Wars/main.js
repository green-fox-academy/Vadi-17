const request = require('request');

request('https://swapi.dev/api/people/1/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.name);
  console.log(body);
});