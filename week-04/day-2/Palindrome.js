'use strict';
// Készíts egy searchPalindrome nevű függvényt, 
// ami követi a jelenlegi nyelv stílus útmutatóját. 
// Bemeneten fogad egy stringet. 
// Majd kikeresi, hogy taláhatóak-e 3 karakternél hoszabb palindrómák benne 
// és végül visszaküldi a talált palindrómák listáját.

const palandString = "1cub23ertzututzzutz";

console.log("The palindroms :" , searchPalindrome(palandString));

function searchPalindrome( palandstr ){
    let palandInverz = reversePaland(palandstr)
    let palandLength = palandstr.length;
    let palandResult = []
    for (let i = 0; i < palandLength - 2; i++) {
        for (let j = i + 3; j < palandLength + 1; j++) {
            let piceOfPala = palandInverz.substring(i, j)
            if ( palandstr.search(piceOfPala) !== -1 ) {
                palandResult.push(piceOfPala);
            }
        }
    }
    return palandResult
}

function reversePaland(string) {
    var reverString = '';
    for (let i = string.length - 1; i >= 0; i--)
        reverString += string[i];
    return reverString;
}