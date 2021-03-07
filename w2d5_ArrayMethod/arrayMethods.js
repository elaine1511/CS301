/* eslint-disable require-jsdoc */
"use strict";

exports.insertArray = insertArray;
exports.isArrayEqual = isArrayEqual;
exports.isPalindrome = isPalindrome;
exports.enhancedIncludes = enhancedIncludes;
exports.ssReverse = ssReverse;

/* 0.  Write a function that will take an index and two arrays and splice the second array into the first at the given position */
/**
 * 
 * @param {number} index is int for arr index
 * @param {array} target is arr to be spliced
 * @param {number} insert hold elements to splice
 * @return {array} the spliced array
 */
function insertArray(index, target, insert) {
    target.splice(index, 0, ...insert);
    return target;
}

/* 1.Write a function, isArrayEqual, that returns true if two arrays have === elements, else false; */
/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 * @return {boolean} true if two arrays have equal elements
 */
function isArrayEqual(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return true;
    }
    return false;
}

/* 2.	Write a function that checks if an array is palindrome by using push and pop array methods to reverse the 
array and then isArrayEqual method you wrote for 1.  */
function isPalindrome(arr) {
    let palArray = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }
    return true;

}
// console.log(isPalindrome(["a", "b", "a"]));
// console.log(isPalindrome(["a", "b", "c"]));

/* 3.      Write a function, reverse2String,  that transforms a given array as following. Use appropriate array methods. 
Input (Array) 	Output (String) 
['Quick', 'Brown', 'Fox'] 	"Fox_Brown_Quick" */

function reverse2String(arr) {
    return arr.reverse().join("_");
}
console.log(reverse2String(['Quick', 'Brown', 'Fox']));


/*
    4.      Write a JavaScript function named enhancedIncludes that takes two parameters, an array, 
    and a value to search in the array and return an array result with three values.
    a.	First value is boolean representing if the search value exists in the array.
    b.	Second value is the first index of value found in the array or -1
    c.	Third value is the last index of value found in the array or -1.
*/

function enhancedIncludes(arr, value) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            newArr.push(true);
            newArr.push(arr.indexOf(arr[i]));
            newArr.push(arr.lastIndexOf(arr[i]));
            return newArr;
        }
    }
    newArr.push(false, -1, -1);
    return newArr;
}

console.log(enhancedIncludes([1, 2, 3, 4, 2], 5)); //[true, 1, 4])

/* 5. Write a function, ssReverse, that returns reversed copy of a given array (original array should remain intact).
Do this without using reverse method, instead use splice and slice methods.  */
// hints for 5:
// - which is appropriate for making a copy of an array, splice or slice?
// - can you write a function that takes an index and an array and a newElement and replaces the element at the index with the newElement?
//   e.g., frontReplace(2,[1, 2,3,4,5,6,7],99) --> [1,2,99,4,5,6,7)
// - can you write a function that takes an index and an array and a newElement and replaces the element at the length - 1 - index with the newElement?
//  e.g., backReplace(2,[1, 2,3,4,5,6,7],99) --> [1,2,3,4,99,6,7)
// - can you write a function that takes an index and an array and returns a string with the elements at positions index and length - 1 - index
//   e.g., getIndices(2,[1, 2,3,4,5,6,7]) --> "35"
function ssReverse(arr) {
    let copy = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        copy.splice(i, 1, arr[arr.length - i - 1]);
    }
    return copy;
}
console.log(ssReverse([2, 3, 4, 5]));


/*   6. (EC) Write a function that merges two sorted arrays into one single sorted array.
Make use of shift and push array methods. */