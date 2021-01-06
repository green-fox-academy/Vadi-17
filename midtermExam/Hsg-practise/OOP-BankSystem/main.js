'use strict';
import HungarianForint from './HungarianForint.js';
import USADollar from './USADollar.js';
import BankAccount from './BankAccount.js';
import Bank from './Bank.js';

let Vadipenze = new HungarianForint(20);
console.log(Vadipenze);

let kartya = new BankAccount("Pista",1720,Vadipenze);
console.log(kartya);
kartya.deposit(170);
console.log(kartya);
console.log("-----------");
console.log(kartya.withdraw(1720,192));

console.log(kartya);


let peti = new HungarianForint(20);
let petikartya = new BankAccount("Peti",2340,peti);
petikartya.deposit(270);

let zolikaka = new USADollar(40);
console.log("zolikaka");
let zolikakakartya = new BankAccount("zolikaka",3342,zolikaka);
console.log(zolikakakartya);
console.log("zolikakaend");
zolikakakartya.deposit(130);

let peti2 = new HungarianForint(20);
let petikartya2 = new BankAccount("Peti2",2340,peti2);
petikartya2.deposit(270);

const otp = new Bank()
otp.createAccount(petikartya);
otp.createAccount(zolikakakartya);
otp.createAccount(kartya);
otp.createAccount(petikartya2);
console.log(otp);
console.log(otp.getAllMoney());
