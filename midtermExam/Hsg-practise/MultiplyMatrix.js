// takes an integer matrix (array of arrays) as a parameter,
// multiplies each even number by 2 in each odd indexed row,
// returns the modified matrix.
'use strict';
let FirstArry = [
    [1, 3, 6, 2],
    [4, 5, 6, 1],
    [3, 3, 1, 5],
    [9, 0, 5, 2]
];
console.log(multiplyMatrixItems(FirstArry));

function multiplyMatrixItems(FirstArry){
    let sizeArry = FirstArry.length
    for (let i = 1; i <= sizeArry; i+=2) {
        for (let j = 0; j < sizeArry; j++) {
            if(!(FirstArry[i][j] %2)){
                FirstArry[i][j] *=2;
            }
        }
    }
    return FirstArry;
}