/*
1. checkPrime
a. Write a function named checkPrime that accepts a parameter and returns true if the
argument is a prime number otherwise returns false.
b. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not.
*/

/** 
* @param {number} is any integer
* @return {boolean} true or false
* process: 
* -   lopp from 2 to number and check for factors
*/
'use strict';

function checkPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const prompt = require('prompt-sync')();
let input = prompt('please enter a number: ');

console.log(checkPrime(input));
