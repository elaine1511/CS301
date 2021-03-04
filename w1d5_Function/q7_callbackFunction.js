/*
Write a function compute, that takes three parameters. First parameter is a call back
function that does the actual operation, second and third are the operands.
For e.g., compute (add, 2,3) should return 5
- Write compute function as a function expression.
- Write add function as a function expression and call compute passing add as a
callback.
o Refactor to pass add logic as an anonymous function. (Make a copy
first)
o Refactor to pass add logic as an arrow function. (Make a copy first)
*/
'use strict';

const compute = function (computeFunc, num1, num2) {
    return computeFunc(num1, num2);
}

const add = function (num1, num2) {
    return num1 + num2;
}

console.log(compute(add, 2, 3));