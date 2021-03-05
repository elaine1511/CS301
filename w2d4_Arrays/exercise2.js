"use strict";
/*
Given an expression array exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
Example:
Input: exp = ["(", ")", "[", "{", "}", "]"]
Output: Balanced
Input: exp = ["[", "(", "]", ")"] Output: Not Balanced
*/

const stack = ["(", "(", ")", ")"];
let balanced = true;

while (stack.length > 0) {
    const top1 = stack.pop();
    if (top1 === "(" || top1 === "}") {
        const top2 = stack.pop();
        if (top1 !== top2) {
            console.log("unbalanced!!");
            balanced = false;
            break;
        }
    }

}