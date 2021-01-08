'use strict';
// import CandyShop from './CandyShop.js';
import HardCandy from './HardCandy.js';
// import Candy from './Candy.js';
import Lollipop from './Lollipop.js';
// import HardCandy from './HardCandy.js';
import {CandyShop} from './CandyShop.js';

let ttt = new Lollipop;
console.log(ttt);
let zzz =[];
for (let i = 0; i < 10; i++) {
    zzz.push(new Lollipop);
}
// console.log(zzz);
let hhh = new HardCandy;
console.log(hhh);



let myBusiness = new CandyShop(30000);
console.log("na itt");
console.log(myBusiness.amountOfSugar);
console.log("...");

console.log("hhhh");
console.log(myBusiness);
myBusiness.createCandy(new HardCandy);
myBusiness.createCandy(new Lollipop);
myBusiness.createCandy(new HardCandy);
myBusiness.createCandy(new Lollipop);
myBusiness.createCandy(new Lollipop);
myBusiness.createCandy(new Lollipop);
console.log(myBusiness);
myBusiness.raisePrice(25)

myBusiness.sell(1);
console.log(CandyShop.priceOfSugar);

CandyShop.priceOfSugar = 800;
console.log(CandyShop.priceOfSugar);
console.log(myBusiness);
myBusiness.buySugar(1);

console.log(myBusiness.toString());
