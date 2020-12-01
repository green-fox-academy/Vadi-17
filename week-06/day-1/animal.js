// Készíts egy Animal osztályt
// Minden állatnak van egy hunger (éhség) értéke, ami egy egész szám
// Minden állatnak van egy thirst (szomjúság) értéke, ami egy egész szám
// Amikor létrehozol egy új állat példányt, ezeknek az értékei alapból legyenek 50
// Minden állat tud enni (eat()), ami csökkenti az éhségét eggyel
// Minden állat tud inni (drink()), ami csökkenti a szomjúságát eggyel
// Minden állat tud játszani (play()), ami mindkét értéket növeli eggyel

'use strict';

class Animal{
    hunger;
    thirst =50 ;
    legNumber;
    constructor(legs=4, hungerh=50){
        this.legNumber = legs;
        this.hunger = hungerh;
        // this.thirst = thirst;
    }
    eat(){
        this.hunger--;
    }
    drink(){
        this.thirst--;
    }
    play(){
        this.hunger++;
        this.thirst++;
    }
    walk() {
        console.log( `I'm walking on my ${ this.legNumber } legs.` );
    }
}
const cocroch = new Animal();
const animalWith3Legs = new Animal(3);
const animalWith5Legs = new Animal(5,17);
console.log(cocroch);
console.log( animalWith3Legs );
console.log( animalWith5Legs );
animalWith3Legs.walk();
animalWith5Legs.walk();
animalWith3Legs.play();
animalWith5Legs.play();
animalWith3Legs.play();
animalWith5Legs.play();
console.log( animalWith3Legs );
console.log( animalWith5Legs );
