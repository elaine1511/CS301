/*
A stacked number is defined to be a number that is the sum of the first n positive integers for some n. The first 5 stacked numbers are:

                   1 = 1

                   3 = 1 + 2

                   6 = 1 + 2 + 3

                   10 = 1 + 2 + 3+ 4

Note that from the above we can deduce that 7, 8, and 9 are not stacked numbers because they cannot be the sum of any sequence of positive integers that start at 1.
Write a function named isStacked that returns true if its argument is stacked. Otherwise, it returns false.  You do not need to prompt for the input. 
So for example, isStacked(10) should return true and isStacked(7) should return false.
*/

"use strict";
/**
 * 
 * @param {number} num is number to be tested
 * @return {boolean} true or false 
 */
function isStacked(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
        if (sum === num) {
            return true;
        }
    }
    return false;
}

console.log(isStacked(15));