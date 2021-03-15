/* eslint-disable require-jsdoc */
"use strict";

function isSumEqual(arr1, arr2) {
    let sum1 = 0;
    for (let n of arr1) {
        sum1 += n;
    }
    let sum2 = 0;
    for (let n of arr2) {
        sum2 += n;
    }
    return sum1 === sum2;
}

console.log(isSumEqual([1, -2, 3], [4, -2]));