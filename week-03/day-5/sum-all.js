'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Logold ki az elemek összegét a konzolra!
const numbers = [3, 4, 5, 6, 7];
let sumNumbers = 0
for (let i=0; i<numbers.length; i++){
    sumNumbers = sumNumbers + numbers[i];
}

console.log(sumNumbers);