'use strict';

const mapWith = (array, callback) => {
  let output = [];
  for (let item of array) {
    output.push(callback(item));
}

  // A mapWith () függvénynek végig kell iterálnia a tömbön, és minden elemnél meg kell hívnia a megadott callback függvényt.
  // A mapWith () -nek vissza kell térnie a kimeneti tömbhöz.

  return output;
}

const addOne = (number) => {
  return number + 1;
}
const multOne = (number) => {
  return number * 2;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

console.log(mapWith([1, 2, 6], multOne));
//expected result: [2, 4, 12]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

function removeSecondLetter(string){
  let result ="";
  for (let i = 0; i <= string.length; i+=2) {
    result = result + string.slice(i, i+1)
  }
  return result;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']