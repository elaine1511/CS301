/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */
"use strict";
let strings = ["cat", "dog", "apple"];
strings.sort();
console.log(strings); //apple, cat, dog


const numbers = [1, 2, 11, 21, 3, 32];
numbers.sort();
console.log(numbers); //1, 11, 2, 21, 3, 32

numbers.sort(myComparator); //numbers.sort((a,b)=>a-b);
console.log(numbers);

function myComparator(a, b) {
    if (a === b) {
        return 0;
    } else if (a > b) {
        return 1;
    } else {
        return -1;
    }
    // can be only 1 line of code: return a-b 
}
