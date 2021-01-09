'use strict';

import WhitebarkPine from "./WhitebarkPine.js";
import FoxtailPine from "./FoxtailPine.js";
import Lumberjack from "./Lumberjack.js";
import Forest from "./Forest.js";




let makkos = new FoxtailPine(23);
console.log(makkos);
let tolgys = new WhitebarkPine();
console.log("--Tölgy");
console.log(tolgys);
tolgys.irrigate();
console.log(tolgys);
console.log("--Makkos");
console.log(makkos);
makkos.irrigate();
console.log(makkos);

let joe = new Lumberjack;
console.log(joe.canCut(makkos));
console.log(joe.canCut(tolgys));


let darkForest = new Forest();
console.log(darkForest.isEmpty());
console.log(darkForest);
console.log(darkForest.isEmpty());
darkForest.addTree(new WhitebarkPine(7) )
darkForest.addTree(new WhitebarkPine() )
darkForest.addTree(new FoxtailPine(11) )
darkForest.addTree(new FoxtailPine(2) )
darkForest.addTree(new FoxtailPine() )
darkForest.addTree(new FoxtailPine(7) )
console.log(darkForest);
console.log();
console.log(darkForest.countForest());
console.log(darkForest.getStatus());
console.log(darkForest.isEmpty());
darkForest.rain()
console.log(darkForest.getStatus())
darkForest.cutTrees(joe);
console.log(darkForest.getStatus())
