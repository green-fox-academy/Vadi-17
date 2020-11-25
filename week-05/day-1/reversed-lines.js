// Készíts egy függvény, ami dekódolja a reversed-lines.txt tartalmát
'use strict';
const fs = require('fs');

console.log(reversedLines('reversed-lines.txt'))

function reversedLines(fileName) {
 
    try {
        let fileContent = fs.readFileSync(fileName, 'utf-8');
        if (fileContent.length === 0) {
            return false
        } else {
            let fileContentArry = fileContent.split('\n');
            let directString = "";
            for (let i = 0; fileContentArry.length > i; i++) {
                let splitString = fileContentArry[i].split("");
                splitString.reverse();
                directString = directString + splitString.join("") + '\n' ;
            }
            return directString;
        }
    }
    catch {
        return false
    }
}
