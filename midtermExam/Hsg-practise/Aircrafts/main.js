'use strict';

import Carrier from "./Carrier.js";
import F16 from "./F16.js";
import F35 from "./F35.js";

let tom16 = new F16();
console.log(tom16);
let tom35 = new F35();
console.log(tom35);

let count =100;
count = tom16.refill(count);
count = tom35.refill(count);
console.log(tom16);
console.log(tom35);
console.log("Maradék" , count);
console.log(tom16.getType());
console.log(tom16.getStatus());
console.log(tom35.getStatus());

const Enterprise = new Carrier(500,1700);
Enterprise.add(tom16);
Enterprise.add(tom35);
console.log(Enterprise);
console.log("ellövik");
tom16.fight();
tom35.fight()
console.log(Enterprise);
console.log("feltölt");
Enterprise.fill();
console.log(Enterprise);

// Japán ------------------------------
const Akagi = new Carrier(400,1700);
let Jamato = new F16();
let Jamagucsi = new F35();
Akagi.add(Jamato);
Akagi.add(Jamagucsi);
Akagi.fill();
console.log(Akagi);

// Fight ------------
Enterprise.strike(Akagi);
console.log(Akagi);
console.log(Enterprise);

console.log(Enterprise.getStatus());
console.log(Akagi.getStatus());