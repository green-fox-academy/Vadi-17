'use strict';
import { Animal } from './Animal.js';
export class Dog extends Animal {
    constructor(name = "dog", ownerName, healthState, adoptable, healCost) {
        super(name, ownerName, healthState, healCost);
        this.healCost = this.throwDice(1, 8);

    }


}