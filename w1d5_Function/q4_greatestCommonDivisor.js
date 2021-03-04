/*
Write a function expression and assign it to the variable
greatestCommonDivisor, which will compute GCD (Greatest Common Divisor) of two
numbers. GCD is the largest number that divides both. For example GCD of 20 and 28 is 4 and
GCD of 98 and 56 is 14.
*/
'use strict';

let greatestCommonDivisor = function (num1, num2) {
    let GCD = (num1 < num2) ? num1 : num2;
    while (!(num1 % GCD == 0 && num2 % GCD == 0)) {
        GCD--;
    }
    return GCD;
}

console.log(greatestCommonDivisor(98, 56));

//another solution
/**
 * @param {number} num1 positive int
 * @param {number} num2 positive int
 * @return {number} gcd
 * process: loop from 2 to min(num1,num2) and test if num divides both,
 * last one will be largest 
 */

let greatest = function (num1, num2) {
    let largest = null;
    const looplimit = Math.min(num1 / 2, num2 / 2);
    for (let i = 2; i <= looplimit; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            largest = i;
        }
    }
    return largest;
}
console.log(greatest(98, 56));

