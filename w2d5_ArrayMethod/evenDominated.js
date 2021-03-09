/* eslint-disable require-jsdoc */
/*
An even dominated array is an array that has count of even elements in the array more than the 
odd elements. wirte a function that tests if an array is even dominated
*/
"use strict";

function isEvenDominated(arr) {
    let evenCount = 0;
    for (let element of arr) {
        if (element % 2 === 0) {
            evenCount++;
        }
    }
    if (evenCount > (arr.length - evenCount)) {
        return true;
    } else {
        return false;
    }
}

function EvenDominated(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let element of arr) {
        if (element % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return evenCount > oddCount;
}
console.log(isEvenDominated([-1, 3, 1, 2, -3, 4, 0, 9, 8]));
console.log(EvenDominated([-1, 3, 1, 2, -3, 4, 0, 9, 8]));