"use strict";
exports.checkPrime = checkPrime;
exports.areaOfCircle = areaOfCircle;

/**
 * 
 * @param {number} num number to be tested if prime
 * @return {boolean} true or false
 */
function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * 
 * @param {number} radius  radius is used to calculate area of circle
 * @return {number} area of circle 
 */
function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
