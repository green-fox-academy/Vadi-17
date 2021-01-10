
'use strict';
import Plant from './Plant.js';
export default class Flower extends Plant {
    constructor(name, amountOfWater = 0, waterPercentage, waterMin) {
        super(name, amountOfWater, waterPercentage = 0.75, waterMin = 5);
        this.name = name;
        this.amountOfWater = 0;
    }
}