'use strict';
// - Hozz létre egy `typo` nevű változót, legyen az értéke `Csincsill`
// - Írj egy `appendAFunc` nevű függvényt, ami kap egy string paramétert és
//   hozzácsatol egy 'a' karaktert a string végéhez, majd visszatér az így
//   kapott teljes stringel
// - Írd ki az `appendAFunc(typo)` eredményét  a konzolra
let typo = `Csincsill`;
console.log(appendAFunc(typo));

function appendAFunc (temp){
    return temp+`a`;
}