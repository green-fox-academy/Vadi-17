'use strict';
// Készíts egy függvényt, ami kap egy számot,
// majd elosztja ezzel a számmal a tízet és
// kiírja az eredményt.
// Ha a bemeneti paraméter 0, azt írja ki, hogy 'hiba'
try{
    console.log(divideByNum(10,0));
}catch( err ){
    console.log("Hiba történt, nem sikerült az osztás" , err.message );
}

console.log("a program fut tovább");
function divideByNum(testNumber1,testNumber2){

    testNumber2 = +testNumber2;

    if (!testNumber2){
        throw new Error("Hiba, invalid number ");
    }
    return testNumber1 / testNumber2;
}

