//favorite-number//
let favoriteNumber = 17;
console.log(`My favorite number: ${favoriteNumber}`);
console.log(" ---------------- ");
console.log(" ");

// cseréld meg a 2 változó értékét programozás útján.
// A numberToSwap1 értéke legyen az, ami a numberToSwap2 változóban van és fordítva.
let numberToSwap1 = 123;
let numberToSwap2 = 526;

let temp = numberToSwap2;
numberToSwap2 = numberToSwap1
numberToSwap1 = temp

console.log("numberToSwap1", numberToSwap1);
console.log("numberToSwap2", numberToSwap2);
console.log(" ---------------- ");
console.log(" ");

// body mass index//
const massInKg = 81.2;
const heightInM = 1.78;
let bodyMassIndex = Math.round( (massInKg / Math.pow(heightInM, 2) ) *10 ) / 10;
console.log("BMI (Body Mass Index): " , bodyMassIndex);

console.log(" ---------------- ");
console.log(" ");

// Hozz létre pár dolgot változóként és utána írasd ki az értékeiket:
// - A neved karakterláncként (string)
// - Korod egész számként (integer)
// - Magasságod méterben törtszámként (float / double)
// - Házas vagy-e logikai értékként (boolean)
let name = "Vadas István";
let age = 55;
let height = 1.82;
let married = true;

console.log("My name is: " + name + ".");
console.log("I'm " + age + " years old.");
if (married) {
    console.log("I'm married.");
} else {
    console.log("I'm not married.");
}
console.log(" ---------------- ");
console.log(" ");

// cuboid
// Írj egy programot, ami egy téglatest 3 oldalát tartalmazza változókban (floats)
// A program írja ki a felületét és térfogatát a testnek ilyen formátumban:
//
// Felület: 600
// Térfogat: 1000
let brickX = 2;
let brickY = 5;
let brickZ = 10;
console.log("Felület: ", 2*brickY*brickZ+2*brickX*brickZ+2*brickX*brickY);
console.log("Térfogat: ", brickY*brickZ*brickX);
console.log("-------------");
console.log(" ");

// Írj egy programot, ami kiszámítja, hogy hány másodperc
// van még hátra a napból úgy, hogy az aktuális időt a fenti változókkal
// lehet beállítani

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;
console.log(60-currentSeconds+(59-currentMinutes)*60+(23-currentHours)*3600 , " Másodperc van még hátra a napból")