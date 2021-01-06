// Create a function named `rotateMatrix` that takes an n×n integer matrix (array of arrays) as parameter
// and returns a matrix which elements are rotated 90 degrees clockwise.
let sourceArry = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
drawArry(sourceArry);
console.log();
drawArry(matrixRotate(sourceArry));
console.log();

sourceArry = [
    [1, 2, 3, 0],
    [4, 5, 6, 1],
    [7, 8, 9, 2],
    [7, 8, 9, 3]
];
drawArry(sourceArry);
console.log();
drawArry(matrixRotate(sourceArry));

function matrixRotate(sourceArry) {
    let lengthNum = sourceArry.length;
    let resultArry = new Array(lengthNum);
    for (let i = 0; i < lengthNum; i++) {
        resultArry[i] = new Array(lengthNum);
        for (let j = 0; j < lengthNum; j++) {
            resultArry[i][j] = 0;
        }
    }

    for (let i = 0; i < lengthNum; i++) {
        for (let j = 0; j < lengthNum; j++) {
            resultArry[j][(lengthNum - i) - 1] = sourceArry[i][j]
        }
    }
    return resultArry;
}

function drawArry(resultArry) {
    let lengthNum = resultArry.length;
    for (i = 0; i < lengthNum; ++i) {
        let rowArrys = [];
        for (j = 0; j < lengthNum; ++j) {
            rowArrys.push(resultArry[i][j]);
        }
        console.log(rowArrys.toString())
    }
}
