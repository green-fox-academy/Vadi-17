'use strict';
import Plant from './Plant.js';
export default class Tree extends Plant {
    constructor(name, amountOfWater = 0, waterPercentage, waterMin) {
        super(name, amountOfWater, waterPercentage = 0.4, waterMin = 10);
        this.name = name;
        this.amountOfWater = 0;
    }
}