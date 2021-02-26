/*
Write a JavaScript program that gives the user three tries to guess the correct pin of the account. 
You set the pin as a constant. When correct display “Correct, welcome back.” 
When incorrect display “Incorrect, try again.”. 
When run out of tries display “Sorry but you have been locked out.”
*/

'use trict';

const prompt = require('prompt-sync')();
let pinGuess = +prompt("Please enter your pin number: ");

const correctPin = 1234;




if (pinGuess !== correctPin) {

    for (let i = 1; i <= 3; i++) {
        console.log('Incorrect, try again');
        prompt("Please enter your pin number: ");
        continue;
    }
    console.log('Sorry but you have been locked out');
}



