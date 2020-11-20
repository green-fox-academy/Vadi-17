'use strict';
// Készíts egy üres objektumot, ahol a kulcsok(keys) számok, és az értékek(values) szöveg típusúak (string)!
let obijjekt = {};
console.log(obijjekt);

console.log(howManyKey());
// Írasd ki hogy az objektum üres-e vagy sem!
if (howManyKey() === 0) {
    console.log("üres")
} else {
    console.log("nem üres")
}
console.log();
// Add hozzá az alábbi kulcs(key) érték(value) párokat az objektumhoz!
obijjekt['97'] = "a";
obijjekt['98'] = "b";
obijjekt['99'] = "c";
obijjekt['65'] = "A";
obijjekt['66'] = "B";
obijjekt['67'] = "C";

//Írasd ki az összes kulcsot!
for (let key in obijjekt) {
    console.log(key);
}
//Írasd ki az összes értéket!
console.log();
for (let key of Object.keys(obijjekt)) {
    console.log(obijjekt[key]);
}
//Add hozzá a D értéket az 68-as kulccsal!
obijjekt['68'] = "D";

// Írasd ki hány kulcs érték pár van az objektumban!
console.log(howManyKey());

//Írasd ki a 99-es kulcshoz tartozó értéket!
console.log(obijjekt['99']);

//Töröld ki azt a kulcs-érték párt, ahol a kulcs 97!
delete obijjekt['97']

//Írasd ki van-e társítva érték a 100-as kulcshoz vagy sem!
console.log(obijjekt['100']);
console.log(obijjekt.hasOwnProperty(obijjekt['100']));

//Távolítsd el az összes kulcs érték párt!
for (let key in obijjekt) {
    delete obijjekt[key];
}
console.log(obijjekt);


function howManyKey() {
    let keyNumber = 0;
    for (let key in obijjekt) {
        if (obijjekt.hasOwnProperty(key)) {
            keyNumber++
        }
    }
    return keyNumber;
}