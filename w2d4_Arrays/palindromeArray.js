/* eslint-disable require-jsdoc */
"use strict";
/*
Write a function that checks if an array is palindrome by using a stack (pus and pop)
Do not modify the original array.
[1,2,1] 
*/
function isPalindrome(arr) { //using push, pop and shift
    let copy = [];
    for (let num of arr) {
        copy.push(num);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.shift() !== copy.pop()) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome([1, 2, 3, 2, 1]));


/* 8.	Write a function that takes an array of strings and returns array of palindrome strings only. 
["not", "a", "kayak", "eagle", "racecar"]), ["a", "kayak", "racecar"]
*/
// split array of strings to each string, then split each string to string array
// the check each string array is palindrome or not
// loop through the array of strings

function filterPalindrome(arr) {
    const palArray = [];
    for (const nextString of arr) {
        const charArray = nextString.split("");
        if (isPalindromes(charArray)) {
            palArray.push(nextString);
        }
    }
    return palArray;
}

function isPalindromes(arr) {
    // loop through half length of the array
    for (let i = 0; i < arr.length / 2; i++) {
        // check if first half equal to the second half
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(filterPalindrome(["not", "a", "kayak", "eagle", "racecar"]));