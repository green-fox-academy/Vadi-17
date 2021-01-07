// takes an integer matrix (array of arrays) as a parameter,
// multiplies each even number by 2 in each odd indexed row,
// returns the modified matrix.
'use strict';
let firstArry = [
    [1, 3, 6, 2],
    [4, 5, 6, 1],
    [3, 3, 1, 5],
    [9, 0, 5, 2]
];

console.log(multiplyMatrixItems(firstArry));

function multiplyMatrixItems(firstArry) {
    let sizeArry = firstArry.length
    let resultArry = JSON.parse(JSON.stringify(firstArry));
    for (let i = 1; i < sizeArry; i += 2) {
        for (let j = 0; j < sizeArry; j++) {
            if (!(resultArry[i][j] % 2)) {
                (resultArry[i][j] *=2);
            }
        }
    }
    return resultArry;
}