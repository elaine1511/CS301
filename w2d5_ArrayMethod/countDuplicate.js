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