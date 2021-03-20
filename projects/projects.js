/* eslint-disable strict */
/* eslint-disable require-jsdoc */
/*
1. A porcupine number is a prime number whose last digit is 9 and the next prime number that
follows it also ends with the digit 9. For example, 139 is a porcupine number because:
a. it is a prime
b. it ends in a 9
c. The next prime number after it is 149 which also ends in 9.
Write a method named findPorcupineNumber which takes an integer argument n and
returns the first porcupine number that is greater than n. So findPorcupineNumber(0)
would return 139 (because 139 happens to be the first porcupine number) and so would
findPorcupineNumber(138). But findPorcupineNumber(139) would return 409 which
is the second porcupine number.
#procupine_number
*/
// function findPorcupineNumber(n) {
//     let num = n + 1;
//     let lastDigit;
//     let prime = 0;
//     let newPrime = 0;
//     while (num > 0) {
//         //find the prime num that is greater than then given num n
//         prime = findPrime(num);
//         newPrime = prime;
//         //prime num is found, now let's check the last digit
//         lastDigit = prime % 10;
//         if (lastDigit === 9) {
//             //find leading prime number
//             newPrime = findPrime(prime);
//             lastDigit = newPrime % 10;
//             //check the last digit
//             if (lastDigit === 9) {
//                 //the porcupine num is found
//                 return prime;
//             }
//         }
//         num = newPrime;
//     }

// }

// function findPrime(num) {
//     let i = num + 1;
//     let j;
//     while (i > 0) {
//         for (j = 2; j < i; j++) {
//             if (i % j === 0)
//                 break;
//         }
//         if (i === j) return i;
//         i++;
//     }
// }
// console.log(findPrime(0));


/*
2. Given an array of integers nums and an integer target, return indices of the two numbers such
  that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the
  same element twice. You can return the answer in any order.
*/
// addToTarget([2, 7, 11, 15], 9), [0, 1])
function addToTarget(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === target) {
                return [i, j];
            }
        }
    }
}
console.log(addToTarget([2, 7, 11, 15], 9));

// 3. Write a function named mostFrequent() that given an array, finds the most frequent element
// in it. If there are multiple elements that appear maximum number of times, returns any one of
// them
function mostFrequent(arr) {
    let count = 1;
    let maxCount = 0;
    let mostFre;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            mostFre = arr[i];
            maxCount = count;
        }
    }
    return mostFre;
}

console.log(mostFrequent([4, 3, 6, 8, 3, 8, 4, 9, 6, 4]));

// 4. Given an array of integers, write a function that finds the pair in array whose sum is closest to 0.
// If there are more than one pair, return any pair.
// For e.g., [4,2, -1,3,-2,-3] → [2,-2]
function closestToZero(arr) {
    let sum = 0;
    let min_i = 0;
    let min_j = 1;
    let min_sum = arr[0] + arr[1];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if (Math.abs(min_sum) > Math.abs(sum)) {
                min_sum = sum;
                min_i = i;
                min_j = j;
            }

        }
    }
    return [arr[min_i], arr[min_j]];
}
console.log(closestToZero([4, 2, -1, 3, -2, -3]));

// 5.  Write a function, that given two arrays representing two non-negative integers with digits, adds
// the two numbers, and return it as an array.