"use strict";

const assert = require("assert");
const fun = require('./functions.js');

/* 1a.	Write a function named checkPrime that accepts a parameter and returns true 
if the argument is a prime number otherwise returns false. */

describe("checkPrime", function () {

    it("37 is prime", function () {
        assert.strictEqual(fun.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(fun.checkPrime(77), false);
    });
});

/*
2. volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on the value of input radius.
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use of the areaOfCircle function.
*/

describe("areaOfCircle", function () {
    it("are of unit circle is PI", function () {
        assert.strictEqual(fun.areaOfCircle(1), Math.PI * 1 * 1)
    });
});

