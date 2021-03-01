/*
Write a program that asks for users age and prints "Happy Birthday!" based on the age. 
For e.g. if the user enters 5, program should print "Happy Birthday!" five time.
*/

'use strict';
const prompt = require('prompt-sync')();

let age = +prompt('Please enter your age: ');

for (let i = 1; i <= age; i++) {
    console.log('Happy Birthday');
}
