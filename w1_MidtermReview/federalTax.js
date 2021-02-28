/*
2. Write a JavaScript program that asks user to input gross salary and shows the federal tax he/she need to pay for the year. Federal tax brackets are as follows
a. Salary up to 20K, don't have to pay any federal tax
b. Salary above 20K and up to 50K, 5% of the salary
c. Salary above 50K needs to pay 10% of the salary
*/
'use strict';
const prompt = require('prompt-sync')();
let grossSalary = prompt('Please enter your gross salary for this year: ');

let taxAmount = 0;

if (grossSalary < 20000) {
    taxAmount = 0;
}
else if (grossSalary < 50000) {
    taxAmount = 0.05 * (grossSalary - 20000);
}
else {
    taxAmount = 1500 + 0.1 * (grossSalary - 50000);
}

console.log(taxAmount);
