'use strict';
import Candy from './Candy.js';
export default class Lollipop extends Candy {
    constructor(price, amountOfSugar) {
        super(price = 600, amountOfSugar= 60);
    }
}