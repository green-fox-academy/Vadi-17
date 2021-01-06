'use strict';
import { Animal } from './Animal.js';
export class Cat extends Animal {
    constructor(name = "cat", ownerName, healthState, adoptable, healCost) {
        super(name, ownerName, healthState, healCost);
        this.name = name;
        this.healCost = this.throwDice(0, 6);
    }
}