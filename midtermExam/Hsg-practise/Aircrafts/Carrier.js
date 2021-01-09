'use strict';
export default class Carrier {
    munitions;
    hp;
    aircraftsArray;
    constructor(munitions, hp) {
        this.munitions = munitions;
        this.hp = hp;
        this.aircraftsArray = [];
    }
    add(newAircraft) {
        this.aircraftsArray.push(newAircraft);
    }
    fill() {
        let count = this.munitions;
        //first the high prioriti
        this.aircraftsArray.forEach((aircraft) => {
            if (aircraft.isPriority()) {
                count = aircraft.refill(count);
            }
        })
        //second the low prioriti
        this.aircraftsArray.forEach((aircraft) => {
            if (!aircraft.isPriority()) {
                count = aircraft.refill(count);
            }
        })
        this.munitions = count;
    }
    getStatus() {
        let countDamage = 0;
        let countAircraft = this.aircraftsArray.length;
        const statusArray = [];
        this.aircraftsArray.forEach((aircraft) => {
            countDamage += aircraft.storage * aircraft.dmg;
        })
        statusArray[0]=`HP: ${this.hp}, Aircraft count: ${countAircraft}, Ammo Storage: ${this.munitions}, Total damage: ${countDamage}`
        statusArray.push(`Aircrafts: ${this.constructor.name}`);
        this.aircraftsArray.forEach((aircraft) => {
            statusArray.push(aircraft.getStatus());
        })
        return statusArray;
    }
    // Amikor a repülőgép anyahajók egymást támadják akkor azt nem fight-nak,
    // hanem strike-nak hívják.  Egész pontosan launch a strike  :-)
    strike(attackedCarrier) {
        let causeDamage = 0;
        this.aircraftsArray.forEach((aircraft) => {
            if (!aircraft.isPriority()) {
                causeDamage += aircraft.storage * aircraft.dmg;
            }
        })
        attackedCarrier.hp -= causeDamage
    }

}