'use strict';

import { Armada } from './armada.js';
import {Ship} from './ship.js';

let geg = new Ship();
geg.fillShip()

console.log("Crew:");
console.log(geg);
console.log("Captin:");
console.log(geg.captain);
console.log();
Ship.setShPow(geg)
console.log(geg);
console.log("* * * * * * * *Armada os Eaglend * * * * * * * * *");
let eaglendArmada= new Armada();
eaglendArmada.fill();
let frankArmada= new Armada();
frankArmada.fill();

let geg2 = new Ship();
geg2.fillShip();

let geg3 = new Ship();
geg3.fillShip();

geg2.battle(geg3);


