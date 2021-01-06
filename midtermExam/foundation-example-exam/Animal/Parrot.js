'use strict';
import { Animal } from './Animal.js';
export class Parrot extends Animal {
    constructor(name = "parrot", ownerName, healthState, adoptable, healCost) {
        super(name, ownerName, healthState, healCost);
        this.healCost = this.throwDice(4, 10);
    }
}