'use strict';
export default class Candy {
    price = 0;
    amountOfSugar = 0;
    constructor(price, amountOfSugar) {
        this.price = price
        this.amountOfSugar = amountOfSugar;
    }
    getsugar(){
        return this.amountOfSugar;
    }
    getprice(){
        return this.price;
    }
}