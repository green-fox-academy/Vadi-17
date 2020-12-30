  
import Animal from './Animal.js';

class Parrot extends Animal {
    healCost = Math.floor(Math.random() * (10 - 3)) + 4;
}

export default Parrot;