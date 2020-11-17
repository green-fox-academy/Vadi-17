'use strict';
//  Hozz létre egy függvény, ami kap egy számot és egy számokból álló tömböt
//  paraméterekként Majd visszadja azoknak a számoknak az indexét a tömbből,
//  ahol a elsőként kapott számjegy megtalálható a számban. Ha az elsőként
//  kapott számjegy nem található meg egyik számban sem, adjon vissza egy üres
//  tömböt

// Példa
console.log(subint(1, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61, 99]));
// ezt kéne kiírnia: '[]'

function subint(num,numbers){
    let colletArry = [];
    let strNum = num.toString();
    for(let i = 0 ;  i < numbers.length ; i++){
        let numStrtemp = numbers[i].toString();
        if (numStrtemp.search(strNum)!==-1){
        colletArry.push(i);
        }
    }
    return colletArry
}

module.exports = subint;