'use strict';

import { Ship } from './ship.js';

export class Armada {
    nationality;
    ships;
    numberOfShip;
    constructor(nationality, ships= [],numberOfShip) {
        this.nationality = nationality;
        this.ships = ships;
        this.numberOfShip = Math.round((Math.random() * 3)+4);
    }
    fill(){
        for (let i = 0; i < this.numberOfShip; i++) {
            this.ships.push(new Ship);
            this.ships[i].fillShip();
            console.log("-------------------");
            console.log(this.ships[i]);
        }
    }
    war(otherArmada){
        
    }
}