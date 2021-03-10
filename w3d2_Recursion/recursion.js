/* eslint-disable require-jsdoc */
/* eslint-disable strict */
/*
Write recursive functions to
count the digits of a given number
reverse a given string.
calculate the power of any base
Write your own recursive logic. Do not use existing methods like reverse or length property.
*/
module.exports = { countDigits, reverse, power, negativePow };

// count the digits of a given number :1234 ->4
function countDigits(num) {
    if (Math.abs(num) < 10) {
        return 1;
    } else {
        return 1 + countDigits(num / 10);
    }
}
console.log(countDigits(-123456));

// reverse a given string. "apple" -> "elppa"
function reverse(str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str[0];
    }
}
console.log(reverse("apple"));

// calculate the power of any base : 10 ** 2 = 100 3**3 = 27

function power(base, pow) {
    if (pow === 0) {
        return 1;
    } else if (pow === 1) {
        return base;
    } else {
        return base * power(base, pow - 1);
    }
}
console.log(power(3, 0));

/* Write a recursive function to compute the power of a negative exponent
e.g., power(5, -3) = power(1/5, 3);
Assume that both arguments to power are integers
*/
/**
 * 
 * @param {number} base is an interger
 * @param {number} pow is an int maybe negtative
 * @return {number}
 */
function negativePow(base, pow) {
    if (pow < 0) {
        pow = pow * -1;
        base = 1 / base;
    }
    if (pow === 0) {
        return 1;
    } else {
        return base * negativePow(base, pow - 1);
    }
}
console.log(negativePow(5, -3));