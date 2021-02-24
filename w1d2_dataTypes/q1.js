// Write a JavaScript program that ask a user for a volume in quarts 
// then converts that value in liters

'use strict';
const prompt = require('prompt-sync')();
let quarts = prompt('Enter value in quarts: ');

let liters = parseFloat(quarts) * 0.946353;

console.log(liters);

