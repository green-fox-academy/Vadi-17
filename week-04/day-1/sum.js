'use strict';
// - Írj egy `sum` nevű függvényt, ami visszaadja (return) az egész számok
//   összegét nullától a megadott paraméterig
console.log(sum(17))

function sum(number){
    let szumma =0;
    for(let i=1 ; i <= number ; i++){
        szumma = szumma + i
    }
    return szumma
}