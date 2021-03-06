/* eslint-disable require-jsdoc */
"use strict";

exports.addends = addends;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.rotateNRight = rotateNRight;
exports.filterRange = filterRange;
exports.filterPalindromes = filterPalindromes;
exports.matrixAddition = matrixAddition;
exports.fmrString = fmrString;

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
function fmrString(arr) {
    let filter = filterNum(arr);
    let sum = 0;
    for (let i = 0; i < filter.length; i++) {
        sum = sum + sumDigit(filter[i]);
    }
    return sum;
}
// console.log(fmrString([32, 105, -22]));

function filterNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr.pop(arr[i]);
        }
    }
    return arr;
}
// console.log(filterNum([32, 105, -22]));

function sumDigit(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
// console.log(sumDigit(32));


/* 7.    Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values
higher or equal to a and lower or equal to b and return a result as an array. */
/**
 * 
 * @param {array} arr is an array to be tested
 * @param {number} num1 is a number to be compared
 * @param {number} num2 is a number to be compared
 * @return {array} new array
 */
function filterRange(arr, num1, num2) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num1 && arr[i] <= num2) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/* 8.	Write a function that takes an array of strings and returns array of palindrome strings only. 
["not", "a", "kayak", "eagle", "racecar"]), ["a", "kayak", "racecar"]
*/
// function filterPalindromes(arr) {
//     let newArr = [];
//     let str = arr.slice(0);
//     let pal = str.toString().split("").reverse().join("").split(",");
//     console.log(pal);
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < pal.length; j++) {
//             if (arr[i] === pal[j]) {
//                 newArr.push(arr[i]);
//             }
//         }
//     }
//     return newArr;
// }
function filterPalindromes(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let str = stringToArray(arr[i]);
        if (isPalindrome(str) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function stringToArray(str) {
    let array = [];
    for (let items of str) {
        array.push(items);
    }
    return array;
}

function isPalindrome(arr) {
    // loop through half length of the array
    for (let i = 0; i < arr.length / 2; i++) {
        // check if first half equal to the second half
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

//* 9. Do matrix addition and return result on matrix format for following:

function matrixAddition(maxtrix1, maxtrix2) {
    let sumMatrix = [[], []];
    for (let i = 0; i < maxtrix1.length; i++) {
        for (let j = 0; j < maxtrix1[i].length; j++) {
            sumMatrix[i][j] = maxtrix1[i][j] + maxtrix2[i][j];
        }
    }
    return sumMatrix;
}
// console.log(matrixAddition([[0, 1, 2], [9, 8, 7]], [[6, 5, 4], [3, 4, 5]]));