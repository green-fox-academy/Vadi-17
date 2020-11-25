// Készíts egy függvényt, ami dekódolja a reversed-order.txt tartalmát
'use strict';
const fs = require('fs');

console.log(reversedOrders('reversed-order.txt'))

function reversedOrders(fileName) {
 
    try {
        let fileContent = fs.readFileSync(fileName, 'utf-8');
        if (fileContent.length === 0) {
            return false
        } else {
            let fileContentArry = fileContent.split('\n');
            let directString = "";
            for (let i = fileContentArry.length; i >= 0; i--) {
                directString = directString + fileContentArry[i] + '\n' ;
            }
            return directString;
        }
    }
    catch {
        return false
    }
}