'use strict';
import Aircraft from './Aircraft.js';

export default class F35 extends Aircraft {
    constructor(munitions, dmg, storage, priority) {
        super(munitions = 12, dmg = 50, storage=0, priority = true);
    }
}