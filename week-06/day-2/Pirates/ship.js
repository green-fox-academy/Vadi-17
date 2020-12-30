import { Pirate } from './pirate.js';

export class Ship {
    shipName;
    captain;
    crewSize;
    crews;
    shipPower;
    constructor(shipName, captain, crewSize = 0, crews = [], shipPower = 0) {
        this.shipName = shipName;
        this.captain = captain;
        this.crewSize = crewSize;
        this.crews = crews
        this.shipPower = shipPower
    }
    static setShPow(ship) {
        ship.shipPower = ship.crews.length - ship.captain.loaded;
    }

    fillShip() {
        this.shipName = randomShipeNames()
        this.captain = new Pirate(randomPirateNames());
        this.captain.loaded = Math.round(Math.random() * 3);
        this.crewSize = Math.round((Math.random() * 4) + 5);
        this.crews = new Array(this.crewSize);
        for (let i = 0; i < this.crewSize; i++) {
            this.crews[i] = new Pirate(randomPirateNames());
        }
        Ship.setShPow(this);
    }
    battle(otherShip) {
        console.log("csata:");
        console.log(this);
        console.log(otherShip);
        Ship.setShPow(this)
        Ship.setShPow(otherShip)
        if (this.shipPower <= otherShip.shipPower) {
            console.log("lost");
        } else {
            console.log("win");
        }
    }

}
function randomPirateNames() {
    let n = ["CHARLES", "JOSEPH", "THOMAS", "CHRISTOPHER", "DANIEL", "PAUL", "MARK", "DONALD", "GEORGE", "KENNETH", "STEVEN", "EDWARD", "BRIAN", "RONALD", "ANTHONY", "KEVIN", "JASON", "MATTHEW", "GARY", "TIMOTHY", "JOSE", "LARRY", "JEFFREY", "FRANK", "SCOTT", "ERIC", "STEPHEN", "ANDREW", "RAYMOND", "GREGORY", "JOSHUA", "JERRY", "DENNIS", "WALTER", "PATRICK"];
    let chance = Math.round(Math.random() * 34);
    return n[chance];
}
function randomShipeNames() {
    let n = ["Ship Happens", "That’s What Sea said", "She Got the House", "In a Meeting", "Kids Inheritance", "Fantasea", "Red pepper", "Black Pearl", "Calypso", "Big Boy", "Infinity", "Island Time", "Journey", "Jalapeno", "Jackpot", "Katarina", "Knotty", "Kashmir", "Luna", "Life Save", "Little Toy", "Maestro", "No Worries", "Ohana", "Orion", "Odyssey", "Princess", "Predator", "Quimby", "Rocket"];
    let chance = Math.round(Math.random() * 30);
    return n[chance];
}

