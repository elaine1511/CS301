/*
Write a Java program to calculate the factorial value of a given number. 
E.g., factorial 4 = 4*3*2*1 = 24
*/

'use trict';

const prompt = require('prompt-sync')();
let number = +prompt("Please enter a number to be factored: ");

let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log(factorial);