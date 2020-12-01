class first {
    semmi = "";
    valami = "";
    constructor(elsoparameter, masodik) {
        this.semmi = elsoparameter;
        this.masodik = elsoparameter;
    }
};
// console.log(first);


// console.log();
// const elsoObject = new first("ide beirtam344343434343", "ez semmibe megy34434343434343");
// const masodObject = new first("idsdfdsf2342irtam", "ez semmi234342e megy");

// console.log(first);
// console.log(elsoObject);
// console.log(elsoObject.masodik);
// console.log(this.objectName.property);

class Animal {
    legNumber = 0;
    constructor(legs) {
        this.legNumber = legs;
        this.type = 'animal with odd number of legs';

    }
    walk() {
        console.log(`I'am walking on my ${this.legNumber} legs`);
    }

}
// console.log(Animal);
let madar = new Animal(3);
// madar.walk();

class Kerekpar {
    constructor(valtok, gear, speed) {
        this.valtokSz = valtok;
        this.gear = gear;
        this.speed = speed;
    }
    ride() {
        console.log('I want to ride my bicycle');
    }
    namemi() {
        console.log(this.gear);
    }
}
let csepel = new Kerekpar(5, 2, 42);
// csepel.agy = "agyvalto"
// csepel.namemi();
// console.log(csepel.gear);
// console.log(csepel);

class Dog {
    legs;
    name;
    color;
    numberOfTails;
    friends = [];

    constructor(legs, name, color, numberOfTails) {
        this.legs = legs;
        this.name = name;
        this.color = color;
        this.numberOfTails = numberOfTails;
    }
    bark() {
      console.log(`a ${this.name} mondja : Vau vau `)
    }

    makeFriendship(cat) {
        this.friends.push(cat);
    }
}
let Zeus = new Dog(4,"Zeusz","black", 2);
console.log(Zeus);
Zeus.bark();
const dogs = [
    new Dog(2, 'Doge', 'barna', 1),
    new Dog(4, 'Jókutya', 'fehér', 1),
    new Dog(4, 'Buksi', 'tarka', 1),
    new Dog(6, 'Ingyen sör', 'fekete', 2)
];
let Kobold = new Dog(3, 'Kobold', 'foltos', 2);
// dogs.forEach( ( dog, i ) => dog.makeFriendship( cats[ i ] ) );
// console.log(dogs[0]);
// console.log(dogs[1]);
// console.log(dogs[2]);
// console.log(Kobold);





class Cat {

    name;
    breed;
    #food;
    #distance = 0;
    #lives = 9;

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.#food = 10;
    }

    meow() {
        this.#food--;
        console.log( `${ this.name } mondja: miáú` );

        return this; // chain
    }
    walk() {
        this.#distance++;
        // this.#food--;
        this.meow();

        return this; // chain
    }
    hasEnoughFood() {
        return this.#food > 0;
    }
    addLife() {
        this.#lives++;
    }
    getLives() {
        return this.#lives;
    }
}


const cats = [
    new Cat('Cirmi', 'perzsa'),
    new Cat('Manci', 'sziámi'),
    new Cat('Lukrécia', 'maine coon'),
    new Cat('Oriza Triznyák', 'házi')
];
console.log(cats[0]);
console.log(cats[1]);

while ( cats[0].hasEnoughFood() ) {
    cats[0].meow();
}

dogs.forEach( ( dog, i ) => dog.makeFriendship( cats[ i ] ) );

let Buksi = dogs[2];
console.log(Buksi);
console.log(Buksi.friends[0].name);
// console.log(Buksi.friends.Cat[0].name);
// Buksi.friends.cat[0].name();
cats[3].walk().meow();
// cats[3].walk();
