/* eslint-disable require-jsdoc */
"use strict";

function countDuplicates(arr) {
    arr.sort();
    let duplicateCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            duplicateCount++;
        }
    }
    return duplicateCount;
}

console.log(countDuplicates([1, 3, 5, 5, 7, 7, 8, 1, 2, 4]));

let newArr = [];
//let count=0
function findDup(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] === arr[j] && !newArr.includes(arr[i])) {
                newArr.push(arr[i]);
                //count++;
            }
        }
    }
    return newArr;
    //return count
}

let result = findDup([10, 9, 5, 9, 5, 1, 0]);
console.log(result);