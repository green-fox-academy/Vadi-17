'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Fordítsd meg a bejárás sorrendjét, kezdd a végéről!
// - beéptett metódussal
// - egy átmeneti arrayt létrehozva, és egy ciklus segítségével
// Logold ki a konzolra a megfordított numbers tömb mindegyik elemét
const numbers = [3, 4, 5, 6, 7];
const temp = numbers.reverse();
for( let i = 0 ; i < temp.length ; i++){
    console.log(temp[i]);
}

// Nem vagyok abban biztos, hogy pont erre gondolt, a feladat kitalálója.