'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Logold ki az elemek összegét a konzolra!
const numbers = [3, 4, 5, 6, 7];
let sumNumber = 0
for (let i=0; i<numbers.length; i++){
    sumNumber = sumNumber + numbers[i];
}

console.log(sumNumber);