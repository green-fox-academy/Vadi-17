// Készíts egy függvényt, ami megtalálja az 5 leggyakoribb nyerőszámot
// a lottery.csv-ben
'use strict';
const fs = require('fs');
let fileName = 'lottery.csv';
let fileContent
try {
    fileContent = fs.readFileSync(fileName, 'utf-8');
}
catch (err) {
    console.log('USER WARNING: ', err.message);
}
let fileContentArry = fileContent.split('\n');
let lotteryArry = new Array(90,2);

// feltölti a 90 elemű lotteryArry 2 dimenziós tömböt
// kell két elem hogy sorbarendezés után is meg lehessen tudni melyik szám hányszor volt
for (let i = 0; i <= 90; i++) {
    lotteryArry[i] = new Array(2);
    lotteryArry[i][0] = 0;
    lotteryArry[i][1] = i;
}
// összeszámolja melyik szám hányszor szerepel, gyüjti a lotteryArry-ban
for (let i = 0; i < fileContentArry.length; i++) {
    let arryString = fileContentArry[i].split(";");
    for (let j = 1; j < 6; j++) {
        let n = parseInt(arryString[arryString.length - j])
        lotteryArry[n][0] = lotteryArry[n][0] + 1;
    }
}
// buborék módszerrel sorbarendezi a lotteryArry tömböt
for (let i = 0; i < lotteryArry.length; i++) {
    for (let j = i; j < lotteryArry.length; j++) {
        if (lotteryArry[j] > lotteryArry[j + 1]) {
            let tmp = lotteryArry[j];
            lotteryArry[j] = lotteryArry[j + 1];
            lotteryArry[j + 1] = tmp;
        }
    }
}
//kiiratás
console.log("Az 5 leggyakoribb szám:");
for(let i= 90 ; i>85; i--){
    console.log(lotteryArry[i][1]);
}

