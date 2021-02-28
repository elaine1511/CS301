/*
Write a defining table and then a JavaScript function isReversedPrime, 
that takes a number as an input and check if the reverse of the input number is prime or not.

Hint: Write two helper functions, one for reversing and another for checking prime 
and use it in the function isReversedPrime.

e.g., isReversedPime(32) returns true because reverse of 32 which is 23 is prime
*/

/**
 * input: number
 * output: true if reversednum is prime
 * process:
 * - first reverse the num
 *    -- get a digit
 *    -- get the quotient
 *    -- save reversed num as we go
 *    -- witj each new digit mult reversedsum by 10 and add new digit  
 * - then check prime and return true if it is
 * 
 * @param {number} is an integer
 * @boolean 
 * 
 */

'use strict';



function reverseDigits(number) {
    let reversed = 0;
    while (number > 0) {
        let lastDigit = number % 10;
        reversed = reversed * 10 + lastDigit;
        number = Math.floor(number / 10);
    }
    return reversed;
}
console.log(reverseDigits(32));

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function isReversedPime(number) {
    let reversednum = reverseDigits(number);
    return isPrime(reversednum);
}

console.log(isReversedPime(32));

