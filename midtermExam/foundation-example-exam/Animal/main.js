'use strict';
import { Cat } from "./Cat.js";
import { Dog } from "./Dog.js";
import { Parrot } from "./Parrot.js";
import { Shelter } from "./Shelter.js";

let catName = ['cirmi','foltos','játékos','fekete']
let cats=new Array(catName.length);
for (let i = 0; i < catName.length; i++) {
    cats[i] = new Cat(catName[i]);
}

let dogName = ['talpas','zeusz','vihar','lucifer']
let dogs=new Array(dogName.length);
for (let i = 0; i < dogName.length; i++) {
    dogs[i] = new Dog(dogName[i]);
}
let parrotName = ['gyuri','zsuzsi','káró','joci']
let parrots=new Array(parrotName.length);
for (let i = 0; i < parrotName.length; i++) {
    parrots[i] = new Parrot(parrotName[i]);
}


//test------------------------------------

cats[1].toString();
cats[1].healthState = false;
cats[1].adoptable = false;
cats[1].toString();

dogs[1].toString();
dogs[1].healthState = false;
dogs[1].adoptable = false;
dogs[1].toString();

let animalShelter = new Shelter();
console.log(animalShelter.budget);
console.log(animalShelter);

// Fill Shetlers
console.log(animalShelter.rescue(dogs[1]));
console.log(animalShelter.rescue(cats[1]));
console.log(animalShelter.rescue(dogs[0]));
console.log(animalShelter.rescue(parrots[2]));
console.log(animalShelter.animals);


console.log(animalShelter.heal());

animalShelter.addAdopter ("Jakab");
animalShelter.addAdopter ("Éva");
animalShelter.addAdopter ("Henrik");
console.log(animalShelter.adopters);

console.log();
console.log("---***********----");
console.log(animalShelter.animals);
console.log("----------------");
console.log(animalShelter.animals.filter(animals => animals.adoptable));
console.log(animalShelter.animals.filter(animals => animals.adoptable).length);




console.log("--- - - - - -* * * * --");
animalShelter.findNewOwner();
console.log(animalShelter.animals);
console.log(animalShelter.adopters);

animalShelter.earnDonation(100);
console.log(animalShelter.budget);

animalShelter.toString();






