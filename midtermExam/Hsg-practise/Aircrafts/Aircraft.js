'use strict';
export default class Aircraft {
    munitions;
    dmg;
    storage;
    constructor(munitions, dmg, storage, priority) {
        this.munitions = munitions;
        this.dmg = dmg;
        this.storage = 0;
        this.priority = priority;
    }
    fight() {
        let damageCaused = this.storage * this.dmg;
        this.storage = 0;
        return damageCaused;
    }
    refill(count) {
        let needMunitions = this.munitions - this.storage;
        if (count >= needMunitions) {
            this.storage += needMunitions;
            count -= needMunitions;
        } else {
            this.storage += count;
            count = 0;
        }
        return count
    }
    getType() {
        return this.constructor.name
    }
    getStatus() {
        return `${this.getType()} , Ammo: ${this.storage}, Base Damage: ${this.dmg}, All Damage: ${this.storage * this.dmg}`
    }
    isPriority() {
        return this.priority;
    }


}
