const fs = require('fs');
// import fs from 'fs';
let readme = fs.readFileSync('readme.txt', 'utf8');
console.log(readme);

//append content at the end of the file:
fs.appendFile('readme.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

let readme2 = fs.readFileSync('readme.txt', 'utf8');
console.log("read2", readme2);
