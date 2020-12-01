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
let rowN = (Math.round(Math.random() * ((labWith - 8)) / 2)) * 2 + 4;
let columnN = (Math.round(Math.random() * ((labHeight - 8)) / 2)) * 2 + 4;
let main
// start the wall
for (let i = 0; i < 170; i++) {
    rowN = (Math.round(Math.random() * ((labWith - 8)) / 2)) * 2 + 4;
    columnN = (Math.round(Math.random() * ((labHeight - 8)) / 2)) * 2 + 4;
    //if Its a free point
    if (labyrint[columnN][rowN] === 0) {
        labyrint[columnN][rowN] = i;
        main = Math.round(Math.random() * 3 + 1);
    }
    let balra_megy = 10;
    let fel_megy = 20;
    let jobbra_megy = 90;
    let le_megy = 100;
    for (let h = 1; h < 20; h++) {
        //  while (labyrint[rowN][columnN] === 0 || labyrint[rowN][columnN] === i) {
        //while(labyrint[rowN][columnN] == 0)

        //itt beragadás van
        // if (labyrint[rowN - 2][columnN] == i && labyrint[rowN + 2][columnN] == i && labyrint[rowN][columnN - 2] == i && labyrint[rowN][columnN + 2] == i) {
        //     for (rowN = 0; rowN < labHeight; rowN++) {
        //         for (columnN = 0; columnN < labWith; columnN++) {
        //             if (labyrint[rowN][columnN] == i)
        //                 labyrint[rowN][columnN] = 0;
        //         }
        //     }
        //     break;
        // }
        let Erre_ugrik_szazalek = Math.round(Math.random() * 3 + 1) + 1;
        console.log("erre" , Erre_ugrik_szazalek);
        console.log("row",rowN);
        console.log("colum",columnN);
        console.log(labyrint[columnN - 2][rowN]);
        if (Erre_ugrik_szazalek < balra_megy && labyrint[columnN - 2][rowN] != i)//balra
        {
            labyrint[rowN][columnN] = i;
            columnN--;
            labyrint[rowN][columnN] = i;
            columnN--;
        }
        else if (Erre_ugrik_szazalek < fel_megy && labyrint[rowN - 2][columnN] != i)//fel
        {
            labyrint[rowN][columnN] = i;
            rowN--;
            labyrint[rowN][columnN] = i;
            rowN--;
        }
        else if (Erre_ugrik_szazalek < jobbra_megy && labyrint[rowN][columnN + 2] != i) //jobbra
        {
            labyrint[rowN][columnN] = i;
            columnN++;
            labyrint[rowN][columnN] = i;
            columnN++;
        }
        else if (Erre_ugrik_szazalek < le_megy && labyrint[rowN + 2][columnN] != i) // lefele
        {
            labyrint[rowN][columnN] = i;
            rowN++;
            labyrint[rowN][columnN] = i;
            rowN++;
        }
    }
    //   labyrint[columnN][rowN] = 1;
}

// draws the array
for (i = 0; i < labHeight; ++i) {
    let rowArrys = []
    for (j = 0; j < labWith; ++j) {
        rowArrys.push(labyrint[i][j]);
    }
    console.log(rowArrys.toString())
}
