'use trict';

const prompt = require('prompt-sync')();
let number = prompt("Please enter a number to test if it is prime: ");

/* a. using factorcount

let factorCount = 0;

for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        factorCount++;
    }
}

let isPrime = factorCount === 0;
console.log(isPrime, 'factor count: ', factorCount);
*/

//b. using break
let isPrime = true;

for (let i = 2; i < number; i++) {
    if (number % 2 == 0) {
        isPrime = false;
    }
    break;
}
console.log(isPrime);

