let numbers = [19, 65, 9, 17];
let sumNum = 0;
for (let i = 0; i < numbers.length; i++) {
    sumNum += numbers[i];
};
console.log(sumNum);

function sum(arry) {
    console.log(arry);
    if (arry.length === 0) return 0;
    return arry[0] + sum(arry.slice(1));
}
console.log(sum(numbers));

//fraktal
let frNum = 6;

let factor = function (number) {
    if (number === 0) return 1;
    return number * factor(--number)
}
console.log(factor(frNum));

// console.log(numbers);
// kiír
function foreachoutprint(i) {
    if (i === numbers.length) return;
    console.log(numbers[i]);
    foreachoutprint(++i)
}
foreachoutprint(0);

//faktorial

function faktorials(num) {
    if (num === 0) return 1;
    return num * faktorials(--num)
}
console.log(faktorials(5));

//fibonacci
function fibonacci(num) {
    if (num < 1) return;
    if (num === 1) return 0;
    if (num === 2) return 1;
    return fibonacci(num - 2) + fibonacci(num - 1);
}
console.log();
console.log(fibonacci(5));

// Írj egy rekurzív függvényt, ami egy paramétert kér: n és
// összeadja a számokat 1-től n-ig.

function additions(n) {
    if (n === 0) return n;
    return n + additions(--n);
}
let numes = 3
console.log(additions(numes));

// Adott egy nem negatív egész szám n,
// térj vissza a számjegyei összegével rekurzívan
// (ciklusok nélkül).
//
// Tipp:
//
// A 10-zel való osztásnál (% = maradékos osztást használva)
// a maradékot kapod
// (pl.: 126 % 10 = 6)
//
// A 10-zel való osztásnál (/) maradék nélküli eredményt kapsz
// (pl.: 126 / 10 = 12).
console.log();

function additi(n) {
    if (n < 1) return 0;
    return n % 10 + additi((Math.round((n / 10)-0.5)  ));
}
console.log(additi(1111111111));

// Adott a "base" és "n" változó, mindkettő értéke legalább 1 vagy magasabb,
// számold ki rekurzívan (ciklusok nélkül) az értékét:
// base-nek n-re emelve
// Tehát, pl.: powerN(3, 2) az 9 (3 a négyzeten).


function powerN(number, exponent) {
    if (exponent === 0) return 1;
    return number * powerN(number, --exponent)
}
console.log();
console.log(powerN(3, 2));
console.log(3 ** 2);

// Egy bizonyos számú nyuszikánk van és minden nyuszinak két nagy, lapát füle.
// Ki szeretnénk számolni az összes nyuszifül számát rekurzívan
// (ciklusok és szorzás nélkül).

function rabbit(n){
    if(n<1) return 0
    return 2 + rabbit(--n)
}
console.log();
console.log(rabbit(5));

// A nyuszikáink egy sorban állnak megszámozva 1, 2, 3, 4, ...
// A páratlan nyusziknak (1, 3, ...) 2 fülük van.
// A páros nyusziknak (2, 4, ..) most 3 fülük van, mert
// mindegyik felemeli az egyik lábát is.
// Rekurzívan térj vissza a sorban álló nyuszik
// füleinek számával 1, 2, ... n (ciklusok és szorzás nélkül).


function rabbit2(n){
    if(n<1) return 0
    return (n%2 ? 2 : 3) + rabbit2(--n)
}
console.log();

console.log(rabbit2(6));

// Adott egy string.
// Készíts rekurzívan (ciklusok nélkül) egy új stringet, ahol
// minden kisbetűs 'x' karakter 'y'-ra cserélődik.
function stringC(string){
    let temp = string.replace('x', 'y');
    if (temp == string) return(string);
    return(stringC(temp));
}
console.log(stringC("xjfdsgxsadxaxhjx kl x"));
// Adott egy string,
// készíts rekurzívan egy új stringet, ahol
// minden 'x' karakter el lett távolítva.
function stringR(string){
    let temp = string.replace('x', '');
    if (temp == string) return(string);
    return(stringR(temp));
}
console.log(stringR("xjfdsgxsadxaxhjx kl x"));
// Adott egy string,
// készíts egy új stringet rekurzívan úgy, hogy
// minden szomszédos karakter egy `*` karakterrel legyen elválasztva
hh="ksdfh"
console.log(hh[0]);
console.log(hh.substr(1));

function stringStar(string){
    let temp = string.replace('x', '');
    if (temp == string) return(string);
    return(stringStar(temp));
}
console.log(stringStar("xjfdsgxsadxaxhjx kl x"));

