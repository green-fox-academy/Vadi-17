'use strict';
// Hozz létre egy `names` változót az alábbi tartalommal:
// `["Arthur", "Boe", "Chloe"]`
// Cseréld fel a names első és harmadik elemét!
// Logold ki az eredményt a konzolra!

const names = ["Arthur", "Boe", "Chloe"];

// there are exactly 3 items, so it is simple and elegant:
console.log("The result with reverse :" , names.reverse());

// for other cases
names.reverse();           //reset
let tempNum = names [2];
names [2] = names [0];
names [0] = tempNum;
console.log("The result with simple method :" , names);
