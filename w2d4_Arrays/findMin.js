"use strict";
/* eslint-disable require-jsdoc */
/*
Write a function findMin that takes an array as a param and returns the min value .
[2,3,-1,-4,3,2,1]
*/
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([2, 3, -1, -4, 3, 2, 1]));