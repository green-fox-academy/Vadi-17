'use strict';
// Hozz létre egy függvényt, ami megkap bemeneten egy számokból álló listát
// Visszadaja egy másik listát, ahol az első lista elemei rendezett emelkedő 
// Sorrendben szereplnek, készíts egy második paramétert, ami ha igaz 
// Csökkenő sorrendben adja vissza a listát

const numbersArry = [43, 12, 56, 24, 9, 5]
const upOrDown = false

console.log(sortNumbersArry(numbersArry, upOrDown));

function sortNumbersArry(numbersArry,upOrDownA){
if(upOrDownA){
    numbersArry.sort(function(a, b){return b-a});

}else{
    numbersArry.sort(function(a, b){return a-b});
}
    return numbersArry;
}

//just for practise
for (let i=0 ; i < numbersArry.length ; i++){
    for (let j = 0 ; j < numbersArry.length - i ; j++){
        if (numbersArry[j] > numbersArry[j+1]){
            let temp = numbersArry[j];
            numbersArry[j] = numbersArry[j+1];
            numbersArry[j+1] = temp;
        }
    }
}