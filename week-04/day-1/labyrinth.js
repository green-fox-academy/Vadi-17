'use strict';
//only odd number! min.11!
const labWith = 51;
const labHeight = 21;
let labyrint = new Array(labHeight);
let i
let j
// creates the labyrint array, fill 0
// exception edge that one 1
for (i = 0; i < labHeight; ++i) {
    labyrint[i] = new Array(labWith);
    for (j = 0; j < labWith; ++j) {
        if (i === 0 || j === 0 || i === labHeight - 1 || j === labWith - 1) {
            labyrint[i][j] = 1;
        } else {
            labyrint[i][j] = 0;
        }
    }
}
// start the wall
let rowN = 0
let columnN = 0
for (let i=0; i<1500 ; i++){
    rowN=(Math.round(Math.random()*((labWith-8))/2))*2+4; 
    columnN=(Math.round(Math.random()*((labHeight-8))/2))*2+4;
    labyrint[columnN][rowN] = 1
}

// draws the array
for (i = 0; i < labHeight; ++i) {
    let rowArrys = []
    for (j = 0; j < labWith; ++j) {
        rowArrys.push(labyrint[i][j]);
    }
    console.log(rowArrys.toString())
}