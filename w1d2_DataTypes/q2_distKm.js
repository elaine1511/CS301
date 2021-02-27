// Write a JavaScript program that asks a user for a distance in kilometers 
// and then convert that value in miles

'use strict';
const prompt = require('prompt-sync')();
let kilometers = prompt('Enter value in kilometers: ');

let miles = parseFloat(kilometers) * 0.621371;

console.log(miles);