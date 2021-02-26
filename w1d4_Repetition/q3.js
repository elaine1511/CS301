/*
Write a JavaScript program that gives the user three tries to guess the correct pin of the account. 
You set the pin as a constant. When correct display “Correct, welcome back.” 
When incorrect display “Incorrect, try again.”. 
When run out of tries display “Sorry but you have been locked out.”
*/

'use trict';

const prompt = require('prompt-sync')();
const correctPin = '1234';
let pinAttempts = 0;

while (pinAttempts < 3) {
    let pinInput = prompt("Please enter your Pin: ");
    if (pinInput === correctPin) {
        console.log('Correct, welcome back');
        return;
    }
    else {
        console.log('Incorrect, try again');
    }
    pinAttempts++;
}
console.log('Sorry but you have been locked out.');