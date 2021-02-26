// 1. Fill in the blanks
const x = 5;
console.log(x);
if (x == 5) {
    let y = 2 * x;
    console.log(y); //10
    console.log(x); //5
}
console.log(x); //5
console.log(y); //undefinded

// 2. What will be the output of following code snippets?
let x;
if (x) {
    const y = 5
};
console.log(y); //undefined

let x;
if (!x) {
    const y = 5
};
console.log(y); //undefined

// 3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian
// calendar.
'use strict';

const prompt = require('prompt-sync')();

let year = +prompt('Please enter the year: ');

if (year % 100 === 0) {
    if (year % 400 === 0) {
        console.log(`${year} is the leap year.`);
    }
    else {
        console.log(`${year} is not the leap year.`);
    }
}
else if (year % 4 === 0) {
    console.log(`${year} is the leap year.`);
}
else {
    console.log(`${year} is not the leap year.`);
}

