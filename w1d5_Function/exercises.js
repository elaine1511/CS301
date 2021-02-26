'use strict';
/*
Write a function named testPrime that returns true when argument to the function is a prime number, otherwise returns false.
• Now call the function to test if user input is prime or not.
*/

/** 
* @param {number} is any integer
* @return {boolean} true or false
* process: 
* -   lopp from 2 to number and check for factors

*/

function testPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


console.log('expect true for 5: ', testPrime(5));
console.log('expect false for 55: ', testPrime(55));

// Scope exercise
let x = 10;
function main() {
    let x = 0;
    console.log("x1 is " + x); //x1=0
    x = 20;
    console.log("x2 is " + x); //x2=20
    if (x > 0) {
        x = 30;
        console.log("x3 is " + x);//x3=30
    }
    console.log("x4 is " + x); //x4=30
    function f(x) {
        console.log("x5 is " + x); //x5=50
    }
    f(50);
    console.log("x6 is " + x);//x6=30
}
main();
console.log("x7 is " + x);//x7=10

