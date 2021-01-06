// Create a function called countWordsEndsWithS that takes a string as an input and returns the number of the words, that ends with s in it.

// Example case:
// countWordsEndsWithS("ends with s characters");
// Should return 3, because "ends with s characters".

'use strict';
const text = "s ends with s char sfdsfs dfgdf acters";

console.log(countWordsEndsWithS(text));


function countWordsEndsWithS(text) {
    let textArry = text.split(" ");
    let counter = 0;
    for (let i = 0; i < textArry.length; i++) {
        let num = textArry[i].length;
        if ("s" === (textArry[i].substr(num - 1, num))) counter++;
    }
    return counter;

}