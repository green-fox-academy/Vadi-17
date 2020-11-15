'use strict';
// - Készíts egy `factorio` nevű függvényt, ami visszaadja 
//   a bemeneti paraméter faktoriálisát
console.log(factorio(4))

function factorio(number){
    let sumN = 1;
    for(let i=1 ; i <= number ; i++){
        sumN = sumN * i
    }
    return sumN
}