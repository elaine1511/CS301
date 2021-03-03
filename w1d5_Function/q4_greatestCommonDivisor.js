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