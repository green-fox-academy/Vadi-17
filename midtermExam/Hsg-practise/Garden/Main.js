'use strict';
import Flower from './Flower.js';
import Tree from './Tree.js';
import Garden from './Garden.js';

let Szemiramisz = new Garden;
Szemiramisz.addPlants(new Flower('yellow'));
Szemiramisz.addPlants(new Flower('blue'));
Szemiramisz.addPlants(new Tree('purple'));
Szemiramisz.addPlants(new Tree('orange'));

console.log("------------------");
Szemiramisz.getInfo();
// Öntözés 40-el
Szemiramisz.watering(40);
console.log();
console.log("Öntözés 40-el");
Szemiramisz.getInfo();
console.log();
// Öntözés 40-el
console.log("Öntözés 70-el");
Szemiramisz.watering(70);
Szemiramisz.getInfo();