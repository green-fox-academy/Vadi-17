'use strict';
// Asszociatív tömbökkel(Map) fogunk játszani. Nyugodtan használj bármilyen beépített függvényt, ahol lehetséges.
// Készíts egy üres objektumot, ahol a kulcsok(keys) számok, és az értékek(values) szöveg típusúak (string)!
// Írasd ki hogy az objektum üres-e vagy sem!
// Add hozzá az alábbi kulcs(key) érték(value) párokat az objektumhoz!
// Kulcs (Key)	Érték (Value)
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
// Írasd ki az összes kulcsot!
// Írasd ki az összes értéket!
// Add hozzá a D értéket az 68-as kulccsal!
// Írasd ki hány kulcs érték pár van az objektumban!
// Írasd ki a 99-es kulcshoz tartozó értéket!
// Töröld ki azt a kulcs-érték párt, ahol a kulcs 97!
// Írasd ki van-e társítva érték a 100-as kulcshoz vagy sem!
// Távolítsd el az összes kulcs érték párt!
// let testObiject = {};

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let faf = fruits.entries();

const testObiject = {
    key: 'value',
    color: 'blue',
    members: [1, 2, 3, 4]
};
console.log(typeof (faf.members));
console.log(typeof (faf));
console.log(typeof (testObiject));

console.log(testObiject.color);

