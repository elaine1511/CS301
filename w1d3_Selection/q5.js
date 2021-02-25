
/* Defining table:
Input: 
    - child's age
    - the season (winter, spring, summer, or fall) 

Processing: 
- Check the child'age according to the table
    + if the age is equal to 5 and younger but >0, then check the season in a nested if
     Depend on which season, we determine the child's bedtime
    + if the age is between 6 and 12 (inclusive), then check the season in a nested if
     Depend on which season, we determine the child's bedtime
    + if the age is equal to 13 and older, then check the season in a nested if
     Depend on which season, we determine the child's bedtime

Output:
    -The child’s bedtime  
*/
'use strict';

const prompt = require('prompt-sync')();

let age = +prompt('Please enter the age: ');
let season = prompt('Please enter the season: ');
let bedtime;

if (age > 0 && age <= 5) {
    if (season === 'summer' || season === 'fall') {
        bedtime = '8:30 PM';
    }
    else if (season === 'winter' || season === 'spring') {
        bedtime = '8:00 PM';
    }
}
else if (age >= 6 && age <= 12) {
    if (season === 'summer') {
        bedtime = '9:30 PM';
    }
    else if (season === 'winter' || season === 'spring' || season === 'fall') {
        bedtime = '8:30 PM';
    }
}
else if (age >= 13) {
    if (season === 'summer') {
        bedtime = '10:30 PM';
    }
    else if (season === 'winter' || season === 'spring' || season === 'fall') {
        bedtime = '9:30 PM';
    }
}
console.log(`The child should go to bed at ${bedtime}.`);