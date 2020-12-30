'use strict';

const labWith = 13;
const labHeight = 13;
let labyrint = new Array(labHeight);
let i
let j
// creates the labyrint array, fill 0
// exception edge that one 1  mainDirection
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

let rowN;
let columnN;
let keepLeft = 20;
let fkeepUp = 40;
let keepRight = 80;
let keepDown = 100;
let mainDirection;

for (let i = 2; i < 300; i++) {
   
    // The new wall is the starting position
    let rowN = (Math.round(Math.random() * ((labWith - 4)) / 2)) * 2 + 2;
    let columnN = (Math.round(Math.random() * ((labHeight - 4)) / 2)) * 2 + 2;
    
    while (labyrint[rowN][columnN] === 0 || labyrint[rowN][columnN] === i) {
        // here is the stuck
        // it has to be deleted
        if (labyrint[rowN - 2][columnN] === i && labyrint[rowN + 2][columnN] === i && labyrint[rowN][columnN - 2] === i && labyrint[rowN][columnN + 2] === i) {
            for (rowN = 0; rowN < labHeight; rowN++) {
                for (columnN = 0; columnN < labWith; columnN++) {
                    if (labyrint[rowN][columnN] === i)
                        labyrint[rowN][columnN] = 0;
                }
            }
        }
        // goes to the wall
        mainDirection = throwDice(99);
        if (mainDirection < keepLeft && labyrint[columnN - 2][rowN] != i)
        {
            labyrint[rowN][columnN] = i;
            columnN--;
            labyrint[rowN][columnN] = i;
            columnN--;
        }
        else if (mainDirection < fkeepUp && labyrint[rowN - 2][columnN] != i)
        {
            labyrint[rowN][columnN] = i;
            rowN--;
            labyrint[rowN][columnN] = i;
            rowN--;
        }
        else if (mainDirection < keepRight && labyrint[rowN][columnN + 2] != i)
        {
            labyrint[rowN][columnN] = i;
            columnN++;
            labyrint[rowN][columnN] = i;
            columnN++;
        }
        else if (mainDirection < keepDown && labyrint[rowN + 2][columnN] != i)
        {
            labyrint[rowN][columnN] = i;
            rowN++;
            labyrint[rowN][columnN] = i;
            rowN++;
        }
    }

}
for (rowN = 0; rowN < labHeight; rowN++) {
    for (columnN = 0; columnN < labWith; columnN++) {
        if (labyrint[rowN][columnN] != 0)
            labyrint[rowN][columnN] = 1;
    }
}

// draws the array
for (i = 0; i < labHeight; ++i) {
    let rowArrys = []
    for (j = 0; j < labWith; ++j) {
        rowArrys.push(labyrint[i][j]);
    }
    console.log(rowArrys.toString())
}


let transLab = new Array (10)

for (i = 1; i <= 11; ++i) {
    transLab[(i-1)] = new Array(10);
    for (j = 1; j <= 11; ++j) {
        if (labyrint[i][j] === 1) {
            transLab[(i-1)][(j-1)] = 1;
        } else {
            transLab[(i-1)][(j-1)] = 0;
        };
    };
};
// console.log(transLab);
for (i = 0; i < 11; ++i) {
    let rowA = []
    for (j = 0; j < 11; ++j) {
        rowA.push(transLab[i][j]);
    }
    console.log(rowA.toString())
}


function throwDice(number) {
    return Math.floor(Math.random() * number + 1);
};