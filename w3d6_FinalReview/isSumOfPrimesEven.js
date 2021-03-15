/* eslint-disable require-jsdoc */
/*
write a function isSumOfPrimesEven (arr) return true if the summ of all the prime elements in the arr is even
otherwise return false. It the arr="" or if the arr does not contain any prime element it should return false
Input: [1,2,3,4,5,6] 
output: prime: 2,3,5 => sum=10=>true
*/
"use strict";

function isSumOfPrimesEven(arr) {
    if (arr.length === 0) return false;
    let sumOfPrime = 0;
    for (let i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i])) {//===true
            sumOfPrime += arr[i];
        }
    }
    return sumOfPrime % 2 === 0;
}
// check if a num is prime or not
function checkPrime(num) {
    num = Math.abs(num);
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isSumOfPrimesEven([1, 2, 3, 4, 5, 6]));
console.log(isSumOfPrimesEven([]));