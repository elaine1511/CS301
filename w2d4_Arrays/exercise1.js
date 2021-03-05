"use strict";
/*
• Write code to create an array named scores and fill it with 5 test scores 10, 20, 30, 40 and 50.
*/
const scores = [10, 20, 30, 40, 50];

/*
• Now write a function named findAverage, that takes an array as an argument
and return average of the array values.*/

/**
 * 
 * @param {array}  arr of number
 * @return {number} average of numbers
 */
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { //for (let num of arr){sum+=num};
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
}

/*
• Call findAverage function passing array you created in step1 and save the return result in a variable, average.
• Print the average, it should be 30 for this example.
*/
const average = findAverage(scores);
console.log("it's expected 30: " + average);

/*
• Create a second array filled with 10 random values between 0 to 10
and find the average of the array values.
• Make sure your program computes correct average for an array of any size.
*/

const randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray[i] = Math.floor(Math.random() * 10);
}

console.log("random numbers: ", randomArray);
console.log("average of random numbers is ", findAverage(randomArray));

