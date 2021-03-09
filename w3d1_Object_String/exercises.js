/* eslint-disable require-jsdoc */
/*
• Write a program that keeps on asking for user input and prints it, until user types the word "stop" (without quotes). "Stop" word can be in any case (small, capital or mixed)
*/

"use strict";

const { join } = require('path');

const prompt = require('prompt-sync')();
let input;
do {
    input = prompt("please enter some text: ");
    input = input.toLowerCase();
    // eslint-disable-next-line no-undef
} while (input !== "stop");

// Write a program that takes comma separated text from user and converts it into an array of words 
// and prints in reverse order.
let userInput = prompt("Please enter some words seperated by comma: ");
let wordArray = userInput.split(",");
wordArray.reverse();
let joinedStr = wordArray.join("_");
console.log(joinedStr);

/* Write a program to replace the first occurrence of "for" in an input string with 4.
*/
function replace4(str) {
    const findex = str.indexOf("for");
    const substring1 = str.substr(0, findex);
    const substring2 = str.substr(findex + 3, str.length - 1);

    return substring1 + 4 + substring2;
}

function replace(str) {
    return str.replace("for", "4");
}
const teststr = "find the first for in this for string";
console.log(replace4(teststr));
console.log(replace(teststr));



