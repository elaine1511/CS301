/*
Now write a new version of leastCommonMultiple that uses the
greatestCommonDivisor function and the mathematical relationship between LCM
and GCD to find the LCM. Research the LCM and GCD relationship online.

LCM(a, b) = (a x b) / GCD(a,b) or GCD(a,b) = (a x b) / LCM(a, b) 
*/
'use strict';

let greatestCommonDivisor = function (num1, num2) {
    let GCD = (num1 < num2) ? num1 : num2;
    while (!(num1 % GCD == 0 && num2 % GCD == 0)) {
        GCD--;
    }
    return GCD;
}

let leastCommonMultiple = function (num1, num2) {
    let LCM = (num1 * num2) / greatestCommonDivisor(num1, num2);
    return LCM;
}

console.log(leastCommonMultiple(4, 6));