import Animal from './Animal.js';

class Dog extends Animal {
    healCost = Math.floor(Math.random() * 8) + 1;
}

export default Dog;