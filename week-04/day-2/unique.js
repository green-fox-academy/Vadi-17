'use strict';
// Hozz létre egy függvényt, ami kap egy számokból álló listát paraméterként
// Visszad egy számokból álló listát, ahol minden szám pontosan egyszer
// szerepel


//  Példa
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))

function unique(arr) {
    let uniqueArray = arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos;
    })
    return uniqueArray;
}
//  ezt kéne kiírnia: `[1, 11, 34, 52, 61]`