'use strict';

export class Animal {
    constructor(name, ownerName, healthState, healCost, adoptable) {
        this.name = name;
        this.ownerName = "";
        this.healthState = true;
        this.adoptable = this.healthState;
    }
    heal() {
        this.healthState = true;
    }
    isAdoptable() {
        return this.healthState;
    }
    toString() {
         let not = (this.healthState ? "":"not ");
        let healCostv = this.healthState ? ``:`${this.healCost}€ `;
        console.log(`Name: ${this.name} is ${not}healthy ${healCostv}and ${not}adoptable`);
    }

    throwDice(number1, number2) {
        return Math.floor(Math.random() * (number2 - number1 + 1) + (number1));
    };
}