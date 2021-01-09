'use strict';
import Aircraft from './Aircraft.js';

export default class F16 extends Aircraft {
    constructor(munitions, dmg, storage, priority) {
        super(munitions = 8, dmg = 30, storage=0, priority = false);
    }
}