'use strict';

// Írj egy programot, ami rajzol
// egy ilyen négyzetet:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke
const lineCount = 6;
let result;
for ( let i=lineCount; i>=1; i--){
    result = "";
    for (let j=1; j<=lineCount; j++){
        if( i == lineCount || i == 1 || j == lineCount || j == 1 ) {
            result = result + "%";
        } else {
            result = result + " ";
        }
    }
    console.log(result);
}
// Írj egy programot, ami rajzol
// egy olyan négyzetet, mint ez:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke
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