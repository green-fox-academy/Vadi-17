'use strict';

// Írj egy programot, ami egy ilyen "sakktáblát" rajzol ki:
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
const lineCount = 8;
let result
for (let i = 1; i <= lineCount; i++) {
    result = "";
    for (let j = 1 ; j <= lineCount; j++){
        if( (i+j)%2 == 0){
            result = result + "%";
        }else{
            result = result + " ";
        }
    }
    console.log(result);
}