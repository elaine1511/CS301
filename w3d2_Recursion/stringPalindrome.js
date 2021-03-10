/* eslint-disable require-jsdoc */
/*
• Write a recursive function to test whether a string is a palindrome • Base case?
• Reductive recursive call?
• Hint: do comparisons from outer edges inwards
*/
"use strict";

function isStringPalindrome(str) {
    if (str.length === 0 || str.length === 1)
        return true;
    else {
        if (str[0] === str[str.length - 1]) {
            return isStringPalindrome(str.substr(1, str.length - 2));
        } else {
            return false;
        }
    }
}
console.log(isStringPalindrome("daadd"));