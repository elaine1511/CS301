/*
Write a function named isSumFirstLastOdd, that takes an integer number as an argument and sums first and last digits of the number and returns true if the sum is odd, otherwise returns false.   Do not use string operations to access the digits.  Work with the numbers as numbers.  Access digits using number operations like %. 

isSumFirstLastOdd(12363) à false, because sum of 1 and 3 is 4 which is even

isSumFirstLastOdd(12764) à true, because sum of 1 and 4 is 5 which is odd

input: pos integer
output: true if sum is odd, false if sum is even
process: 
    go through all the digits in a while loop
    save the first and last digit and add them and check for divisible by 2
*/

'use strict';

function isSumFirstLastOdd(num) {
    let sum = firstDigit(num) + lastDigit(num);
    if (sum % 2 === 0) {
        return false;
    }
    return true;
}

function lastDigit(num) {
    let last = num % 10;
    return last;
}

function firstDigit(num) {
    let first = reversedNum(num) % 10;
    return first;
}

function reversedNum(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}

//another solution

function isSumOdd(num) {
    let smallest = null;
    let greatest = null;
    let last;
    while (num > 0) {
        if (smallest === null) {
            smallest = num % 10;
        } else {
            num = num % 10;
            last = num;
            quotient = Math.floor(num / 10);
        }

    }
}






console.log(isSumFirstLastOdd(12363));