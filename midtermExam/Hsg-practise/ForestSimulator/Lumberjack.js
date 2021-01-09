'use strict';
export default class Lumberjack {
    constructor() {
    }
    canCut(tree) {
        let canCutTree = false;
        if(tree.getHeight() > 4) canCutTree = true;
        return canCutTree;
    }

}