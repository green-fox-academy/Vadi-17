'use strict';
import Tree from './Tree.js';
export default class FoxtailPine extends Tree {
    constructor(height) {
        super(height);
    }
    irrigate() {
        this.height++
    }
}