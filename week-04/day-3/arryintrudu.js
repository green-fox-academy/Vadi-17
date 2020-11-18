'use strict';

// Készíts egy üres tömböt,
let names = [];

// Ami szövegeket tartalmaz!
names = names.concat("Steve", "Susan");

// Írasd ki a tömb elemeinek a számát!
showNamesLength();

// Add hozzá Williemet a tömbhöz!
names.push("Williem");

// Írasd ki, hogy a tömb üres-e vagy sem!
if (names.length === 0) {
    console.log("Tha arry is empty");
} else {
    console.log("Tha arry is not empty");
}

// Add hozzá Johnt a tömbhöz!
// Add hozzá Amandát a tömbhöz!
names = names.concat("Johnt", "Amanda");

// Írasd ki a tömb elemeinek a számát!
showNamesLength();

// Írasd ki a tömb harmadik elemét!
console.log(names[2]);

console.log(names);

// Iterálj végig a tömbön, és írasd ki az összes nevet!
console.log("Iterálj végig a tömbön előre: ")
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Töröld a második elemet a tömbből!
names.splice(1, 1);
// Iterálj végig a tömbön fordított sorrendben, és írasd ki az összes nevet!
console.log("Iterálj végig a tömbön fordítva: ")
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

// Távolítsd el a lista összes elemét!
names.splice(0,names.length);

console.log(names);


function showNamesLength() {
    console.log("display length is: " + names.length);
}