'use strict';
import Lollipop from "./Lollipop.js";
import HardCandy from "./HardCandy.js";

export class CandyShop {
    amountOfSugar = 0;
    inventory = [];
    income = 0;

    constructor(amountOfSugar) {
        this.amountOfSugar = amountOfSugar;
        this.inventory = [];
        this.income = 0;
    }
    createCandy(creatTypeOfCandy) {
        this.inventory.push(new HardCandy());

 
        console.log(creatTypeOfCandy);
        console.log(this.amountOfSugar);
        // console.log(HardCandy.amountOfSugar);
        if (creatTypeOfCandy === "HardCandy") {
            if (this.amountOfSugar >= HardCandy.amountOfSugar) {
                this.inventory.push(new HardCandy());
                this.amountOfSugar -= HardCandy.amountOfSugar;
            } else {
                console.log("itt dobni egy nincs elég cukor hibát");
            }
        }
        if (creatTypeOfCandy === "Lollipop") {
            if (this.amountOfSugar >= Lollipop.amountOfSugar) {
                this.inventory.push(new Lollipop());
                this.amountOfSugar -= Lollipop.amountOfSugar;
            } else {
                console.log("itt dobni egy nincs elég cukor hibát");
            }
        }
    }
    raisePrice(raiseAmount) {
        // this.inventory.forEach(item => item.)
    }
}







// - It has `sugar`, `income`, and an `inventory` (list of candies).

// - It takes an `amountOfSugar` parameter in gram when creating an instance.

// - It has a `createCandy()` method which takes any type of `Candy` as a parameter

//     - the `sugar` can't go below 0 » throw an error/exception if it happens with a descriptive message
//     - otherwise store the candy in the `inventory` and
//     - reduce the `sugar` amount by the amount needed to create the candies

// - It has a `raisePrice()` method which takes an `amount` as a parameter

//     - raise the prices of all the candies in the `inventory` with the `amount`

// - It has a `sell()` method which takes an `amountOfCandiesToBeSold` as parameter

//     - the income will be increased by the price of the candies that were sold,
//     - sold candies will be deleted from the inventory
//     - can't sell more candies than the amount of inventory has » sell the maximum possible amount (number) of candies

// - It has a `buySugar()` method which takes an `amount` as parameter

//     - the `amount` parameter's unit is KiloGram
//     - price of 1000 grams sugar is $2
//     - the income can't go below 0 » throw an error/exception if it happens with a descriptive message
//     - otherwise it raises the Candy Shop's amount of sugar
//       and reduces the income by the price of it

// - It has a `toString()` method which represents the Candy Shop

//     - return a string in this format:

//         - `Inventory: 0 hard candies, 1 lollipops; Income: $100; Sugar: 400 grams`