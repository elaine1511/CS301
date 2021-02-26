/*
Write a JavaScript program to compute sum of all the digits in a given integer number.
123 ->6
*/
'use trict';

const prompt = require('prompt-sync')();
let number = +prompt("Please enter an interger number: ");

let sum = 0;
let digits;

while (number) {
    digits = number % 10;
    number = (number - digits) / 10;
    sum += digits;
}
console.log(sum);


