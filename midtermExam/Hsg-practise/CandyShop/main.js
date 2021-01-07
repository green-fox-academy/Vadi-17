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
myBusiness.createCandy("HardCandy");
myBusiness.createCandy("HardCandy");
myBusiness.createCandy("HardCandy");
myBusiness.createCandy("Lollipop");
myBusiness.createCandy("Lollipop");
myBusiness.createCandy("Lollipop");
myBusiness.createCandy("Lollipop");
console.log("hhhh");
console.log(myBusiness);
