'use strict';
// Hozz létre dinamikusan* egy kétdimenziós tömböt!
// Tartalma az alábbi mátrix** legyen.
// Használj ciklust hozzá!
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
// Logold ki a mátrixot a konzolra.
//
// * a mérete egy változóból érkezzen, így téve dinamikussá a mátrix létrehozását
// ** ne ijedj meg a kifejezéstől, egy mátrix: tömbök a tömbben
const lineCount = 6;
let matrix = new Array(lineCount);

for (let i = 0; i < lineCount; ++i) {
    matrix[i] = new Array(lineCount);
    for (let j = 0; j < lineCount; ++j) {
        if( i+j == lineCount-1 ){
            matrix[i][j] = 1;
        } else {
            matrix[i][j] = 0;
        }
    }
}
console.log(matrix)

// Create with Arry function
console.log("Create with Arry function ---")
let matrix2WithPush = new Array(lineCount);
for(let i=0; i<lineCount ; i++ ){
    let oneLineArry = []
    for(let j=0; j<lineCount ; j++ ){
        if( i+j == lineCount-1 ){
            oneLineArry.push(1);
        }else{
            oneLineArry.push(0);
        }
    }
    matrix2WithPush.push(oneLineArry);
}

console.log(matrix2WithPush)