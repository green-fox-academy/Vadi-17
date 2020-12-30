'use strict';

import Character from './character.js';

class monster extends Character {
    constructor(isBoss = false) {
        this.isBoss = isBoss;
    }
}
export default monster;