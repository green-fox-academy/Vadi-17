// Create a function called mergeElements that takes two string arrays / 
// lists as an input and merges the two arrays / 
// lists into one.
'use strict';
console.log(mergeElements(["apple", "pear", "banana", "orange"], []));
console.log(mergeElements(["apple", "pear", "banana", "orange"], ["dog", "cat"]));
console.log(mergeElements(["apple", "pear", "banana", "orange"], ["dog", "cat", "sds", "hhh", "zzz"]));

function mergeElements(firstArry, secondArry) {
  const resultArry = [];
  const firstLength = firstArry.length;
  const secondLength = secondArry.length;
  const longerLength = ((firstLength >= secondLength) ? firstLength : secondLength)
  for (let i = 0; i < longerLength; i++) {
    if (i < firstLength) resultArry.push(firstArry[i]);
    if (i < secondLength) resultArry.push(secondArry[i]);
  }
  return resultArry;
};