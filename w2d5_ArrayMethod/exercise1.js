"use strict";

/* Write a function, invert, that will reverse an array and 
output the reversed elements as a string with an optional separator.
”*/
/**
 * 
 * @param {array} arr is an array to be tetsted
 * @param {*} seperator opt
 * @return {string} a string
 */
function invert(arr, seperator = "....") {
    const reversed = arr.reverse();
    const joined = reversed.join(seperator);
    return joined;
}

console.log(invert(["bye", "hi"]));
