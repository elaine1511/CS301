/*
Write a program that reads from the keyboard a student's name and number of completed credits and 
then outputs the student's name and label on following rules:
a. "Freshman" if 0<credits<30
b. "Sophomore" if 30<=credits<60 
c. "Junior" if 60<=credits<90
d. "Senior" if credits>90
*/
'use strict';

const prompt = require('prompt-sync')();

let name = prompt('Please enter your name: ');
let numCredits = +prompt('Please enter the number of completed credits: ');
let label;

if (numCredits >= 90) {
    label = 'Senior';
}
else if (numCredits >= 60) {
    label = 'Junior';
}
else if (numCredits >= 30) {
    label = 'Sophomore';
}
else if (numCredits > 0) {
    label = 'Freshman';
}

console.log(name + ' is ' + label + ' .');