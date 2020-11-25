'use strict';
const fs = require('fs');
// Írj egy programot, ami megnyit egy 'my-file.txt' nevű fájlt
// majd kiír minden sort a fájlból.
// Ha a program nem tud olvasni a fájlból (pl.: mert nem létezik),
// akkor írja ki, hogy: 'Unable to read file: my-file.txt'

try {
    let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
    console.log(fileContent);
  }
  catch{
    console.log('Unable to read file: my-file.txt');
  }