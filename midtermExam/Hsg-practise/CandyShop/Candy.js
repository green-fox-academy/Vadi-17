'use strict';
export default class Candy {
    price = 0;
    amountOfSugar = 0;
    constructor(price, amountOfSugar) {
        this.price = price
        this.amountOfSugar = amountOfSugar;
    }
    getSugar(){
        return this.amountOfSugar;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price =price ;
    }
    increase(price){
        this.price += price;
    }
}