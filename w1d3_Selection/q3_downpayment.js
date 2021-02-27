/*
Write a program that calculates down payment for a home loan based on following rules.
*/
'use strict';

const prompt = require('prompt-sync')();

let cost = +prompt('Please enter the cost of house: ');
let downpayment;

if (cost >= 200000) {
    downpayment = 5000 + 0.1 * (cost - 200000);
}
else if (cost >= 100000) {
    downpayment = 2000 + 0.15 * (cost - 100000);
}
else if (cost >= 50000) {
    downpayment = 1000 + 0.1 * (cost - 50000);
}
else if (cost >= 0) {
    downpayment = 0.05 * cost;
}

console.log(`The downpayment is $${downpayment}.`);