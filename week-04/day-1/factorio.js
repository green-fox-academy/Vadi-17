'use strict';
// - Készíts egy `factorio` nevű függvényt, ami visszaadja 
//   a bemeneti paraméter faktoriálisát
console.log(factorio(4))

function factorio(number){
    let sumNumber = 1;
    for(let i=1 ; i <= number ; i++){
        sumNumber = sumNumber * i
    }
    return sumNumber
}