/*
Write a JavaScript program that asks radius of a circle as input form the user and prints the area of the circle using formula (πr2). 
- Program should keep on prompting user to enter correct value, until the value enter is a positive number. 
Use Math object for getting the value of π and getting the square of the radius.
*/

'use strict';
const prompt = require('prompt-sync')();

let radius;
do {
    radius = prompt('Please enter radius: ');

} while (radius <= 0);

let areOfCircle = Math.PI * radius * radius;
console.log(areOfCircle);