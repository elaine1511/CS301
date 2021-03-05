"use strict";

const { kMaxLength } = require("buffer");

exports.addends = addends;
exports.getMiddle = getMiddle;

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
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    return arr;
}
/* 4.	Write a function to rotate the elements in an array to the right by 1. */
/**
 *
 * @param {array} arr is an array to be tested
 * @return {array} new array after rotating the elements to the right by 1
 */
