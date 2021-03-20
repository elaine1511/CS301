/* eslint-disable require-jsdoc */
// write a function called theMostRepeated() to get the most repeated number in the array? [1,2,2,2,3] //2
"use strict";
let arr = [3, "a", "a", "a", 2, 3, "a"];
let maxCount = 1; //the default maximum frequency
let currCount = 0; //used for incrementing the element and initially set to zero
let repNum; //used for assigning the element

for (let i = 0; i < arr.length; i++) { //select the 1st element of the given array and compare it with every element from there onwards.
    for (let j = i; j < arr.length; j++) {
        if (arr[i] === arr[j])
            currCount++;
        //the counter would increament every time the same elements occur, 
        //which means the frequency of that element.
        if (maxCount < currCount) {
            maxCount = currCount;
            repNum = arr[i];
        }
    }
    currCount = 0;
}

console.log(repNum + " : " + currCount);

// write a function called existOnlyOnce( ) in a given array which has elements repeated twice except one single element? 
// e.g [9,9,4,4,6,6,7,7,3,22,22] //3




