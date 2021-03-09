"use strict";

const { get } = require("http");

exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.sumFirst = sumFirst;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
/*
1. Write the code, one line for each action:
a. Create an empty object car
b. Add the property name make with value Toyota
c. Add the property name model with value Camry
d. Print the object
e. Without modifying the code structure of the object, change the value of the model to
RAV4.
f. Print the object
g. Without modifying the code structure of the object, Remove property make from the
object
h. Print the object
*/
let car = {};
car.make = "Toyota";
car.model = "Camry";
console.log(car);
car.model = "RA4";
console.log(car);
delete car.make;
console.log(car);

/*
2. Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
It can assume that the only properties it needs to check are name and age
*/
/**
 * 
 * @param {object} obj1 is a person obj
 * @param {object} obj2 is a person obj
 * @return {boolean} true if values equal
 */
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    } else {
        return false;
    }
}

/*
3.	Write the function countProperties(obj) which returns number of properties of an object.
*/
/**
 * 
 * @param {object} obj is an object to be tested
 * @return {number} number of properties
 */
function countProperties(obj) {
    let count = 0;
    for (let prop in obj) {
        prop;
        count += 1;
    }
    return count;
}
const bob = { name: "Bob", age: 10 };
console.log(countProperties(bob));

/*
4.	Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", otherwise return false.
*/
/**
 * 
 * @param {string} str is tested
 * @return {boolean} true if contains text "lottery" or "prize"
 */
function checkSpam(str) {
    let strArray = str.split(" ");
    for (let text of strArray) {
        if (text === "lottery" || text === "prize") {
            return true;
        }
    }
    return false;
}
const string1 = "there is a prize in the lottery";
const string2 = "there is a nothing in the fridge";
console.log(checkSpam(string1));
console.log(checkSpam(string2));


/*
5.	Write a function named suffix that returns the common suffix of two strings. For example, the common suffix of “swimming”
and “walking” is “ing”. This function takes two parameters and returns the common suffix.
*/
/**
 * 
 * @param {string} str1 is tested
 * @param {string} str2 is tested
 * @return {string} common suffix
 */
function suffix(str1, str2) {
    let suffix = "";
    let len1 = str1.length;
    let len2 = str2.length;
    let len = (len1 > len2) ? len1 : len2;
    for (let i = 0; i < len; i++) {
        if (str1[len1 - i - 1] !== str2[len2 - i - 1]) {
            return suffix;
        }
        suffix = suffix + str1[len1 - i - 1];
    }
    return suffix.split().reverse().join("");
}
console.log(suffix("jackson", "johnson"));



// 6.	Write a function named titleCase with one parameter named s. This function 
// returns a copy of s but with the first letter of each word capitalized.
/**
 * 
 * @param {string} str is string
 * @return {string} copy of str with uper case
 */
function titleCase(str) {
    let copy = str.slice();
    let result = copy[0].toUpperCase() + copy.slice(1);
    return result;
}


/*
7.	Write the function getAverageAge(users) that gets an array of objects with two properties name and age and returns the average age.
Use for .. of
*/
/**
 * 
 * @param {array} users is an array
 * @return {number} average age
 */
function getAverageAge(users) {
    let age = 0;
    for (let element of users) {
        age = age + element.age;
    }
    return age / users.length;
}
const people = [{ name: "Sam", age: 20 }, { name: "Fred", age: 10 }];
console.log(getAverageAge(people));


/* 8.	Write a function, sumFirst, to return the sum of the first elements of the inner arrays for arrays with the following structure.
Use a for .. of loop.
arr = [[1, 2], [3, 4], [5, 6]]
*/
/**
 * 
 * @param {*} arr is tested
 * @return {number} sum
 */
function sumFirst(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i][0];
    }
    return sum;
}
console.log(sumFirst([[1, 2], [3, 4], [5, 6]]));

