/* eslint-disable require-jsdoc */
"use strict";

exports.addends = addends;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.rotateNRight = rotateNRight;
exports.filterRange = filterRange;

/* 1.	Write a function addend(arr) that accepts an array of numbers as parameters and 
returns the sum of first and last elements of the array. */
/**
 * 
 * @param {array} arr is an array to be tested
 * @return {number} sum of first and last elements of the array
 */
function addends(arr) {
    let total = arr[0] + arr[arr.length - 1];
    return total;
}

/* 2.	Write a function named getMiddle that returns the value of the middle element in an array. If 
the array has an even number of elements, then this function must return the average of the two middle elements. */
/**
 * 
 * @param {array} arr is an array to be tested 
 * @return {numbe} the middle element if the array has even number of elements
 */
function getMiddle(arr) {
    let middle = (arr.length - 1) / 2;
    if (arr.length % 2 !== 0) {
        return arr[middle];
    } else {
        return (arr[Math.floor(middle)] + arr[Math.ceil(middle)]) / 2;
    }
}

/* 3.	Write a function to rotate the elements in an array to the left by 1. */
/**
 * 
 * @param {array} arr is an array to be tested 
 * @return {array} new array after rotating the elements to the left by 1
 */
function rotateLeft(arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return arr;
}
/* 4.	Write a function to rotate the elements in an array to the right by 1. */
/**
 *
 * @param {array} arr is an array to be tested
 * @return {array} new array after rotating the elements to the right by 1
 */
function rotateRight(arr) {
    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
}

/* 5. Modify each rotate function to rotate array by n times where, 
n is the second parameter passed in the function (EC). n < number of elements */
/**
 * 
 * @param {array} arr is an array to be tested
 * @param {number} num is number of times an array to be rotated
 * @return {array} new array after rotating the elements to the right by n times
 */
function rotateNRight(arr, num) {
    for (let i = 0; i < num; i++) {
        let last = arr[arr.length - 1];
        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = last;
    }
    return arr;
}
/* 6. Write a JavaScript function that takes a string of numbers as comma separated values, e.g, “32, 105,  -22”,  
and stores it into an array, e.g., [32, 105, -22] and do following operations
a.    Filters out negative values
b.    Maps the filtered elements to sum of its digits--i.e., 32 becomes 5 and 105 becomes 6
c.    Reduce to get sum of all the elements and returns this value--i.e, add the 5 and 6 to get 11
*/
// function fmrString(str) {
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         arr.push(parseInt(str[i]));
//     }
//     return arr;

// }

/* 7.    Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values
higher or equal to a and lower or equal to b and return a result as an array. */
/**
 * 
 * @param {array} arr is an array to be tested
 * @param {number} a is a number to be compared
 * @param {number} b is a number to be compared
 * @return {array} new array
 */
// eslint-disable-next-line id-length
function filterRange(arr, a, b) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterRange([1, 2, 3, 4, 5], 4, 5));
