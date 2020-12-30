'use strict';
// import Map from './map.js';
import { battlefield } from "./battlefield.js";
import { Character } from "./character.js";
import { Hero } from './hero.js';
let currentLevel = 0;
const cellaSize = 72;

// let myCarakterem = new Character(false, 72, 3, 3, 3, true, 0);
//   myCarakterem.drowCaracter()


let myHero = new Hero(false, 72, 3, 3, 3, true, 0);
myHero.drowHero();

let myCarat = new Character(false, 72, 3, 3, 3, true, 0);
myCarat.drowCaracter();

// window.addEventListener('keypress', (event) => {
  document.body.addEventListener('keypress', (event) => {
  input[event.key] = true;
console.log(input);
  
});