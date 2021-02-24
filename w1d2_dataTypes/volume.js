'use strict';

const prompt = require('prompt-sync')();

const radius = prompt('Please enter radius: ');
const height = prompt('Please enter height: ');

const volume = Math.PI * radius * radius * height;
console.log(volume);

/*  Write a program that takes x and y co-ordinates of two points as inputs 
and computes distance between these two points based on
the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
*/

const x1 = prompt('Please enter x1 coordinate: ');
const y1 = prompt('Please enter y1 coordinate: ');
const x2 = prompt('Please enter x2 coordinate: ');
const y2 = prompt('Please enter y2 coordinate: ');

const x_diff = x2 - x1;
const y_diff = y2 - y1;

const sumSquares = x_diff ** 2 + y_diff ** 2;
const distance = Math.sqrt(sumSquares);
console.log(distance);
