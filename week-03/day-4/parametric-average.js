'use strict';

// Írj egy programot, ami kiszámítja 1-től egy megadott számig
// a számok összegét és átlagát
//
// Például:
// Megadott szám: 5
// Kimenet: Összeg: 15, átlag: 3
const number =5;
let sum = 0;
let i;
for(i = 1 ; i <= number ; i++){
    sum = sum + i;
}
console.log("Megadott szám:" ,number);
console.log("Kimenet: Összeg:", sum ,  ", átlag:" , sum/(i-1));