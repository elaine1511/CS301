
"use strict";

let arr1 = [1, 2, 3];

let arr2 = [1, 2, 3];
/**
 * 
 * @param {array} fistArray is tested 
 * @param {array} secondArray is tested
 * @return {boolean} true if first arr is equal to second arr
 */
function arrayEqual(fistArray, secondArray) {
    if (fistArray.length !== secondArray.length) {
        return false;
    }

    for (let i = 0; i < fistArray.length; i++) {
        if (fistArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}

console.log(arrayEqual(arr1, arr2));
