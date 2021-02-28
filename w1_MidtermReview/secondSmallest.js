/*
Write a defining table and JavaScript function named secondSmallest that accepts three
integer numbers as parameters and return the second-smallest value among them.
For e.g. secondSmallest(-1,9,7) → 7
*/
/**
 * input: numers: a, b, c
 * output: second smalles value
 * process: 
 * - b<a<c or c<a<b : a is second smallest
 * - a<b<c or c<b<a : b is second smallest
 * - c is second smallest
 */
'use strict';

function secondSmallest(a, b, c) {
    if (b < a && a < c || c < a && a < b) {
        return a;
    }
    if (a < b && b < c || c < b && b < a) {
        return b;
    }
    return c;
}
console.log(secondSmallest(-1, 9, 7));