// 1. How many times loop will be executed in following scenarios?
for (let i = 0; i > 10; i++) {
    console.log(i);
}
// 0 loop, no output

for (let i = 0; i <= 10; i--) {
    console.log(i);
}
//infinite loop

let i = 1;
while (i < 10) {
    console.log(i);
}
// nfinite loop

let i = 1;
while (i < 10) {
    console.log(i);
    i--;
}
//infinite loop

// 2. What will be the output of running following code?
for (let i = 1; i < 10; i++) {
    if (i % 3 === 0) break;
    console.log(i);
}
// // 1 2

for (let i = 1; i < 10; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}
// 1 2 4 5 7 8

/* 3. Write a defining table and JavaScript program to check whether a number is Perfect number or
not?
Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
For example: 6 is the first perfect number
Proper divisors of 6 are 1, 2, 3
Sum of its proper divisors = 1 + 2 + 3 = 6.
Hence 6 is a perfect number

Input: positive interger
Output: true or false
Process: 
    - initial sum to 1 (cause 1 always included)
    - loop from 2 to the num-1
    - in the loop check if the index is a factor, ie: num%index===0;
    - if so add to sum
    - Finally check to see if sum===num, then is perfect

*/
'use trict';

const prompt = require('prompt-sync')();
let number = +prompt("Please enter positive interger: ");
let sum = 1;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        sum = sum + i;
    }
}
if (sum === number) {
    console.log(`${number} is perfect number!`);
}
else {
    console.log(`Sorry, ${number} is not perfect number!`);
}




