'use strict';
const fs = require('fs');
// Írj egy függvényt, ami fogad egy fájlnevet stringként,
// majd visszadja a fájlban található sorok számát.
// Ha nem tudja megnyitni a fájlt adjon vissza nullát és
// ne jelezzen semmilyen hibát.

console.log(countsowsInString('my-file.txt'))
console.log(countsowsInString('reversed-lines.txt'))
console.log(countsowsInString('nothing.txt'))

function countsowsInString(fileName) {
    try {
        let fileContent = fs.readFileSync(fileName, 'utf-8');
        if (fileContent.length === 0) {
            return 0
        } else {
            let fileContentArry = fileContent.split('\n');
            return fileContentArry.length;
        }
    }
    catch {
        return 0
    }
}