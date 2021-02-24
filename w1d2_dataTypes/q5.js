/*
When you exercise to strengthen your heart, you should maintain your heart rate within a range. 
To find that range, subtract your age from 220. This difference is your maximum heart rate per minute.
Your heart simply will not beat faster than this maximum (220 − age). 
When exercising to strengthen your heart, you should keep your heart rate between 65% and 85% of your heart’s maximum. 
Write a JavaScript program that asks for a person’s age and computes and 
outputs the slowest and fastest rates necessary to strengthen his heart.
*/

const promp = require('prompt-sync')();

let age = +promp('Please enter your age: ');
let max_heart_rate = 220 - age;
let slowest_rates = 0.65 * max_heart_rate;
let fastest_rates = 0.85 * max_heart_rate;

console.log(`The slowest rates necessary to strengthen your heart is ${slowest_rates}.`);
console.log(`The fastest rates necessary to strengthen your heart is ${fastest_rates}.`);

