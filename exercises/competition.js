/* eslint-disable strict */
/* eslint-disable require-jsdoc */
/*
1. Write a function divisibleSumPairs that takes an array of integers and a positive integer k,
determines the number of (i,j) pairs where i<j and arr[i]+arr[j] is divisible by k.
Example:
ar = [1,2,3,4,5,6]
k= 5
-> 3
*/
exports.divisibleSumPairs = divisibleSumPairs;
exports.findMinDistance = findMinDistance;
exports.computeHeight = computeHeight;

function divisibleSumPairs(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}
console.log(divisibleSumPairs([1, 2, 3, 4, 5, 6], 5));

/*
2. Write a function mostFrequentSight, that takes an array of bird sightings where every element
represents a bird type id. It determines the id of the most frequently sighted type. If more than 1
type of birds are most frequent, return the smallest of their ids.
[1,1,2,2,3] ->1
[1,4,4,4,5,3] ->4
*/
function mostFrequentSight(arr) {
    

}
console.log(mostFrequentSight([1, 1, 2, 2, 3]));

/*
3. There is a large pile of socks that must be paired by color. Write a
function countSocksPairs, that given an array of integers representing the color of each sock,
determines how many pairs of socks with matching colors there are
*/
function countSocksPairs(arr) {
    let counter = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count % 2 == 0) {
            counter++;
        }
    }
    return counter;
}

console.log(countSocksPairs([1, 2, 1, 2, 1, 3, 2]));

/*

*/

function computeHeight(height, cycles) {

    let year = cycles / 2;

    for (let i = 0; i < year; i++) {

        height = height * 2;

        height = height + 1;

    }
    return height;

}

console.log(computeHeight(1, 4));

/*
6. The distance between two array values is the number of indices between them. Write a
function findMinDistance, that given an array finds the minimum distance
between matching pairs of elements in the array. If no such value exists, return -1.
[3,2,1,2,3] ->2
*/
function findMinDistance(arr) {
    let minDist = Number.MAX_VALUE;
    let distance = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                distance = Math.abs(j - i);
                minDist = Math.min(distance, minDist);
                break;
            }
        }
    }
    if (minDist === Number.MAX_VALUE) {
        return -1;
    }
    return minDist;
}
console.log(findMinDistance([3, 2, 1, 2, 3]));