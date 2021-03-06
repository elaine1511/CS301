/* eslint-disable require-jsdoc */
"use strict";

function sumArrays(arr1, arr2) {
    let resultArray = [];
    for (let i = 0; i < arr1.length; i++) {
        resultArray[i] = arr1[i] + arr2[i];
    }
    return resultArray;
}
console.log(sumArrays([1, 2, 3], [3, 2, 1]));