'use strict';
const lineCount = 3;
// Írj egy programot, ami rajzol
// egy ilyen háromszöget:
// *
// **
// ***
// A háromszögnek annyi sora legyen, mint amennyi a lineCount értéke
let result
for (let i = 1; i <= lineCount; i++) {
    result = "";
    for (let j = 1 ; j<=i ; j++ ){
        result = result + "*";
    }
    console.log(result);
}