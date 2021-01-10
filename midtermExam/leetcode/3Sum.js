// Given an array nums of n integers, 
// are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.
// Notice that the solution set must not contain duplicate triplets.
'use strict';

const nums = [-1, 0, 1, 2, -1, -4];
let resultArray = [];
const numsLength = nums.length;
for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
        for (let k = j + 1; k < numsLength; k++) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                let transferArray = [];
                transferArray = [nums[i], nums[j], nums[k]];
                transferArray.sort(function (a, b) { return a - b });
                transferArray.toString();
                if (resultArray.indexOf(transferArray.toString()) === -1) {
                    resultArray.push(transferArray.toString());
                }
            }

        }

    }

}
for (let i = 0; i < resultArray.length; i++) {
    resultArray[i] = resultArray[i].split(',')
}
console.log(resultArray);

