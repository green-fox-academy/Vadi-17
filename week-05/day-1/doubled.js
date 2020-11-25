// Készíts egy függvényt, ami dekódolja a duplicated-chars.txt tartalmát
'use strict';
const fs = require('fs');

console.log(takeOutSecond('duplicated-chars.txt'))

function takeOutSecond(fileName) {
 
    try {
        let fileContent = fs.readFileSync(fileName, 'utf-8');
        if (fileContent.length === 0) {
            return false
        } else {
            let fileContentArry = fileContent.split('\n');
            let singelString = "";
            for (let i = 0; fileContentArry.length > i; i++) {
                let splitString = fileContentArry[i].split("");
                singelString = singelString + '\n' ;
                for (let j = 0; splitString.length > j; j++) {
                    if (j % 2 === 0) {
                        singelString = singelString + splitString[j];
                    }
                }
            }
            return singelString;
        }
    }
    catch {
        return false
    }
}
