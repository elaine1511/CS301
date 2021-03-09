/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
/*
Write both iterative and recursive solutions to calculate factorial of an integer.
factorial (0) = 1
factorial (n) = n * factorial (n-1) [for n>0]
*/

"use strict";
/**
 * 
 * @param {number} n is positive numver
 * @return {number} factorial of number n * n-1 * n-2 *....* 1
 */

function recursiveFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * recursiveFactorial(n - 1);

    }
}
console.log(recursiveFactorial(4));