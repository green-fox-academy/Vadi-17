'use strict';
// Írj egy programot, ami
// ilyen piramist rajzol:
//
//
//    *
//   ***
//  *****
// *******
//
// A piramisnak annyi sora legyen, mint amennyi a lineCount értéke
const lineCount = 3;
let result;
for (let i = 1; i <= lineCount; i++) {
    result = "";
    for (let j = lineCount; j > i; j--) {
        result = result + " ";
    }
    result = result + "*";
    for (let j = 1; j < i; j++) {
        result = result + "**";
    }
    console.log(result);
}