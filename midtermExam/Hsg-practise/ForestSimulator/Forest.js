'use strict';
import WhitebarkPine from "./WhitebarkPine.js";
import FoxtailPine from "./FoxtailPine.js";
import Tree from "./Tree.js";

export default class Forest {
    treesArray = [];
    constructor(treesArray = []) {

    }
    rain(){
        this.treesArray.forEach ((tree) => tree.irrigate());
    }
    addTree(tree) {
        this.treesArray.push(tree);
    }
    countForest() {
        return this.treesArray.length;
    }
    isEmpty() {
        return (this.countForest() ? true : false)
    }
    getStatus(){
        let treeStatusArray = [];
        this.treesArray.forEach ((tree) =>{ 
            let text = `There is a ${tree.getHeight()} tall ${tree.constructor.name} in the forest.`
            treeStatusArray.push(text);
        });
        return treeStatusArray;
    }
    cutTrees(lumberjack){
        this.treesArray = this.treesArray.filter((item, index) => (lumberjack.canCut(this.treesArray[index])) );
    }
}