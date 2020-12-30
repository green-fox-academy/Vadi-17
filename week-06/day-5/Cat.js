  
import Animal from './Animal.js';

class Cat extends Animal {
    healCost = Math.floor(Math.random() * 6);
}

export default Cat;