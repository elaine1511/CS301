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
let isPerfectNum = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        sum = sum + (number / i);
        if (sum === number) {
            isPerfectNum = true;
        }
        else {
            isPerfectNum = false;
        }
    }
}
console.log(isPerfectNum);


