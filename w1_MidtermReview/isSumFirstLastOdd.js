/*
Write a function named isSumFirstLastOdd, that takes an integer number as an argument and sums first and last digits of the number and returns true if the sum is odd, otherwise returns false.   Do not use string operations to access the digits.  Work with the numbers as numbers.  Access digits using number operations like %. 

isSumFirstLastOdd(12363) à false, because sum of 1 and 3 is 4 which is even

isSumFirstLastOdd(12764) à true, because sum of 1 and 4 is 5 which is odd
*/
/* eslint-disable */

/* input pos integer 
output true if sum of smallest and largest digits is odd 
process:
 go through all the digits in a while loop
 save the first and last and add them and check for divisible by 2
 */

function isOdd(number) {
    let smallest = null;  //digit in unit position
    let greatest = null;  //digit in greatest position
    let last = null;  //placeholder to remember last digit left before number goes to 0
    while (number > 0) {

        let quotient = null;
        if (smallest === null) {
            smallest = number % 10;
        } else {
            const remainder = number % 10;
            last = remainder;
            number = Math.floor(number / 10);
        }
        if (number === 0) {
            greatest = last;
            const sum = smallest + greatest;
            const result = sum % 2 !== 0;
            return result;
        }
    }
}

console.log("expect false for 789 : ", isOdd(789));
console.log("expect true for 1234 : ", isOdd(1234));

/**
 * 
 * @param {number} num is tested 
 * @return {boolean} true or false
 */
function isSumFirstLastOdd(num) {
    let lastDigit = num % 10;

    let firstDigit = 0;
    while (num > 9) {
        num = Math.floor(num / 10);
        firstDigit = num;
    }
    let sum = firstDigit + lastDigit;

    if (sum % 2 === 0) {
        return false;
    } else {
        return true;
    }
}
console.log(isSumFirstLastOdd(12363));


