/*
Write a defining table and JavaScript program to Display Fibonacci series up to N terms. 
N being positive integer from user input.
The Fibonacci series is a sequence such that each number is the sum of the two preceding ones, 
startingfrom0and1.Thatis, fib(0)=0,fib(1)=1,fib(n)=fib(n–1)+fib(n–2)forn>1.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
*/

/*
Input: number
Output: f series
Process:
-   for n>2, fib=fibPrevious + fibPrevious2
-   first number===0;
-   fibPrevious=0
-   Second number->1
-   fibPrevious2=1
-   loop from 2 to number
-   fib=fibPrevious + fibPrevious2 and log fib
-   fibPrevious=fib;
-   fibPrvious2=fibPrevious
*/

'use trict';

const prompt = require('prompt-sync')();
let num = prompt("Please enter positive interger: ");
let f0 = 0;
let f1 = 1;
let f = f0 + f1;

while (f < num) {
    f0 = f1;
    f1 = f;
    f = f0 + f1;
    console.log(f);
}
