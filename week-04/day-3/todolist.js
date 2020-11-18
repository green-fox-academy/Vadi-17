'use strict';
// A "todoText" lista kezdődjön a "My todos:" szöveggel (a jelenlegihez add hozzá ezt a szöveget úgy, hogy elé kerüljön)
// Add hozzá a " - Download games" tennivalót a lista végére
// Add hozzá a " - Diablo" tennivalót a lista végére, 2 szóköz indentációval
// Várt eredmény:
// My todos:
//  - Buy milk
//  - Download games
//      - Diablo

let buyMilk = " - Buy milk\n";
let myToDos = "My todos:\n";
let downLoadGames = " - Download games\n";
let space = " ";
let diablo = " - Diablo";

let todoText = buyMilk + myToDos + downLoadGames + space.repeat(2) + diablo;

console.log(todoText);