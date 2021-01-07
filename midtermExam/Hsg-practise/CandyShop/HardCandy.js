'use strict';
import Candy from './Candy.js';
export default class HardCandy extends Candy {
    constructor(price, amountOfSugar) {
        super(price = 1200, amountOfSugar= 80);
    }
}