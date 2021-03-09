/* eslint-disable require-jsdoc */
/* eslint-disable strict */
/*
Write a function that takes an array as an input and returns the second largest element of the array
*/
function secondLargest(arr) {
    let largest = arr[0];
    let secondlargest = arr[0];

    for (let elements of arr) {
        if (elements > largest) {
            largest = elements;
            secondlargest = largest;
        } else if (elements > secondlargest) {
            secondlargest = elements;
        }
    }
    return secondlargest;
}
console.log([-1, 2, 0, 1, 2, -3, 4, 9, 8]);