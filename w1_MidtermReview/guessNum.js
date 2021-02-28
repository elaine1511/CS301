/*
Write a defining table and JavaScript program that asks user to guess a number between 1 and
10 until the user enters 5. Program also keeps track of number of attempts user made before
guessing the correct number that is 5. Program should output following results based on the
attempts made:
1. If user guessed 5 in first attempt, program should print "Awesome!"
2. If user guessed 5 in second attempt, program should print "Great!"
3. If user guessed 5 in third attempt, program should print "Not bad!"
4. Otherwise, program should print "It took you n attempts!", where n is the number of
attempts user made before guessing the correct answer.
*/

'use strict';
const prompt = require('prompt-sync')();

let guessNum;
let numAttempts = 0;

do {
    guessNum = +prompt('Please enter a number between 1 and 10: ');
    numAttempts++;
} while (guessNum !== 5);

if (numAttempts === 1) {
    console.log('Awesome!');
} else if (numAttempts === 2) {
    console.log('Great!')
} else if (numAttempts === 3) {
    console.log('Not bad!')
} else {
    console.log(`It took you ${numAttempts} attempts!`);
}
