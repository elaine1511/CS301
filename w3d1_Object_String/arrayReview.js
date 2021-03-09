/*
1. Which of the following are destructive and safe array methods? 
destructive: push, pop, shift, splice, reverse, sort

safe: concat, join, forEach, slice
*/

/*
2.	Write a function findMin that takes an array as a parameter and returns the minimum value. 
Use a for .. of loop.  
*/
"use strict";
exports.findMin = findMin;
exports.sumOddIndicesValues = sumOddIndicesValues;
exports.sumArrays = sumArrays;

/**
 * 
 * @param {array} arr is to be tested
 * @return {number} min value
 */
function findMin(arr) {
    let min = arr[0];
    for (const elements of arr) {
        if (elements < min) {
            min = elements;
        }
    }
    return min;
}
console.log(findMin([-1, 10, 3, 88, 4]));

/*
3.	Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum of values on the odd indices.
*/
/**
 * 
 * @param {array} arr is an arr is tested
 * @return {number} sum of values on the odd indices
 */
function sumOddIndicesValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOddIndicesValues([1, 3, 4, 6, 4, 7, 2]));


/*
4.	Write a function sumArrays, that takes two arrays as parameters (you can assume of same length) then returns a
new array by adding two array values at the corresponding indices.
*/
/**
 * 
 * @param {array} arr1 is an array
 * @param {array} arr2 is an array
 * @return {array} new array
 */
function sumArrays(arr1, arr2) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = arr1[i] + arr2[i];
        newArr.push(sum);
    }
    return newArr;
}
console.log(sumArrays([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));