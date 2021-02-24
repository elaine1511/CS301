/*
Write JavaScript program to compute the mileage of a vehicle
Your program should allow the user to enter the beginning and ending odometer readings
and the number of gallons of gas used and should output the mileage in miles per gallon.
*/
const prompt = require('prompt-sync')();

let beg_odometer = +prompt('Please enter the beginning odometer readings: ');
let end_odometer = +prompt('Please enter the ending odometer readings: ');
let num_gallons_of_gas = +prompt('Please enter the number of gallons of gas used: ');

let mileage = (end_odometer - beg_odometer) / num_gallons_of_gas;

console.log(`The mileage of the vehicle is ${mileage}.`);


