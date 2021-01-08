// takes an integer matrix (array of arrays) as a parameter,
// multiplies each even number by 2 in each odd indexed row,
// returns the modified matrix.
'use strict';
let firstArray = [
    [1, 3, 6, 2],
    [4, 5, 6, 1],
    [3, 3, 1, 5],
    [9, 0, 5, 2]
];

let value = 23
console.log(multiplyMatrixItems(firstArray));

function multiplyMatrixItems(firstArray) {
    let sizeArray = firstArray.length
    let resultArray = JSON.parse(JSON.stringify(firstArray));
    for (let i = 1; i < sizeArray; i += 2) {
        for (let j = 0; j < sizeArray; j++) {
            if (!(resultArray[i][j] % 2)) {
                (resultArray[i][j] *=2);
            }
        }
    }
    return resultArray;
}