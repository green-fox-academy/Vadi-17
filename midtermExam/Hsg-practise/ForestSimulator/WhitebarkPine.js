'use strict';
import Tree from './Tree.js';
export default class WhitebarkPine extends Tree {
    constructor(height) {
        super(height);
    }
    irrigate() {
        this.height +=2;
    }
}