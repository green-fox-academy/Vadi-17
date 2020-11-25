// Olvasd ki az összes adatot a 'log.txt' fájlból.
// Minden sor egy üzenetet jelöl egy webszervertől
// Írj egy föggvényt, ami visszaad egy tömböt az egyedi IP címekkel
// Írj egy függvényt, ami visszaadja a GET / POST kérések arányát
'use strict';
const fs = require('fs');
let fileName = 'log.txt';
let fileContent
try {
    fileContent = fs.readFileSync(fileName, 'utf-8');
}
catch (err) {
    console.log('USER WARNING: ', err.message);
}
console.log(customIps(fileContent));
console.log(calcGetPost(fileContent));

function customIps(fileContent) {
    let iparry = [];
    let fileContentArry = fileContent.split('\n');
    for (let i = 0; fileContentArry.length > i; i++) {
        iparry.push(fileContentArry[i].substr(27, 11));
    }
    iparry.sort()
    let uniqueArray = iparry.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
    return uniqueArray;

}


function calcGetPost(fileContent) {
    let getSum = 0;
    let postSum = 0;
    let fileContentArry = fileContent.split('\n');
    for (let i = 0; fileContentArry.length > i; i++) {
        let getPostString = fileContentArry[i].substr(41, 4);
        if( getPostString === 'POST' ){
            postSum++
        }
        if( getPostString === 'GET ' ){
            getSum++
        }
    }
    return postSum/getSum;
}