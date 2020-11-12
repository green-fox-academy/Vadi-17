'use strict';
const lineCount = 4;
const halfLineCount = Math.floor(lineCount/2);
let result;
for ( let i=lineCount-1; i>=0; i--){
    result = "";
    for (let j=0; j<lineCount; j++){
        if( (i+j) < halfLineCount || (i+j) >=lineCount+halfLineCount || Math.abs(i-j) > halfLineCount ){
            result = result + " ";
        } else {
            result = result + "*";
        }
    }
    console.log(result);
}

for ( let i=lineCount; i>=1; i--){
    result = "";
    for (let j=1; j<=lineCount; j++){
        if( i == lineCount || i == 1 || j == lineCount || j == 1 || i+j == lineCount+1 ) {
            result = result + "%";
        } else {
            result = result + " ";
        }
    }
    console.log(result);
}
let i=1
for(i=1; i>0 ; i++ ){
    console.log(i)
};