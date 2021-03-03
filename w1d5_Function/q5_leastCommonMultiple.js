/*
Write a function expression to find LCM of any two numbers using the
greatestCommonDivisor function from previous question. Assign it to the variable
leastCommonMultiple. LCM of two numbers is the smallest number that can be
divided evenly by both numbers. Write it as a function expression.
*/

'use strict';

let leastCommonMultiple = function (num1, num2) {
    let LCM = (num1 > num2) ? num1 : num2;
    while (!(LCM % num1 == 0 && LCM % num2 == 0)) {
        LCM++;
    }
    return LCM;
}

console.log(leastCommonMultiple(4, 6));