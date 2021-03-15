/* eslint-disable require-jsdoc */
/*
perfectly odd arr if element at the odd indices of arr is also odd . return false if an arr is empty
[2,3,4,5,7,8] false
*/
"use strict";
function isPerfectOdd(arr) {
    if (arr.length === 0) return false;
    if (checkOddElement(arr) && checkOddIndice) {
        return true;
    }
    return false;
}


function checkOddElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return false;
        }
    }
    return true;
}
function checkOddIndice(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPerfectOdd([2, 3, 4, 5, 7, 8]));