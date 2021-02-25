/*
Write a program that helps a user choose the correct footwear for the day’s weather based on the table shown below.
If the user enters any other weather type, your program should output “sneakers”
*/
'use strict';

const prompt = require('prompt-sync')();

let input = prompt('Please enter the weather today: ');
let footwear;

if (input === 'hot') {
    footwear = 'Sandals';
}
else if (input === 'rain') {
    footwear = 'galoshes';
}
else if (input === 'snow') {
    footwear = 'boots';
}
else {
    footwear = 'sneakers';
}
console.log('Your footwear for today is ' + footwear);
