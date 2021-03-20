/* eslint-disable require-jsdoc */
"use strict";

function largestPrimeFactor(num) {
    let largestPrimeFactor = 2;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            if (checkPrime(i)) {
                largestPrimeFactor = i;
            }
        }
    }
    return largestPrimeFactor;
}

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(largestPrimeFactor(10));