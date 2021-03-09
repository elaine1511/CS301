/*
Write recursive solution to find Fibonacci(n) based on following definition
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(n) = fibonacci(n-1) + fibonacci(n-2) [for n>1]
• This definition is a little different than the previous ones because
• It has two base cases, not just one; in fact, you can have as many as you like.
• In the recursive case, there are two recursive calls, not just one. There can be as many as needed.
• 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on
*/
"use strict";
/**
 * 
 * @param {number} n is positive int
 * @return {number} fib of num 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on
 */
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        const nextFib = fibonacci(n - 1) + fibonacci(n - 2);
        return nextFib;
    }
}
console.log(fibonacci(7));