/*
2. volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on the value of input radius.
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use of the areaOfCircle function.
c. Write code to call and test your function.
*/

'use strict';
function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    return area;
}

function volumeOfCylinder(height, radius) {
    let volume = areaOfCircle(radius) * height;
    return volume;
}

console.log(areaOfCircle(2));
console.log(volumeOfCylinder(3, 2));
