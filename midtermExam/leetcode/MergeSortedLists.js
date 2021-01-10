// You are given an array of k linked-lists lists, 
// each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.
'use strict';

const lists = [[1, 4, 5], [3, 5, 6], [2, 6], [1, 3, 8, 9]];

const listLength = lists.length;
let elementLength = []

let totalNumberOfPieces = 0
for (let i = 0; i < listLength; i++) {
    elementLength.push(lists[i].length);
    totalNumberOfPieces += lists[i].length
}

let resultArray = [];
let smallerItemIndex = 0;

for (let i = 0; i < totalNumberOfPieces; i++) {
    let flag = false;
    for (let j = 0; j < listLength; j++) {
        if (lists[j][0] >0  && !flag) {
            smallerItemIndex = j
            flag = true
        }
        if (lists[smallerItemIndex][0] >= lists[j][0] ) {
            smallerItemIndex = j
            flag = true
        }
    }
    if (flag) {
        resultArray.push(lists[smallerItemIndex][0])
        lists[smallerItemIndex].shift();
        elementLength[smallerItemIndex]--
    }
}
console.log(resultArray.toString());
