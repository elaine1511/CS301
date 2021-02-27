/*
Write a program that calculates the total volume of a house, including the volume of the roof space. 
Your program must allow the user to enter width, depth, height and sweep as shown in figure below. 
Write code to call and test your function
    houseVolume = livingVolume + roofVolume
    livingVolume = width * height * depth
    roofVolume = triangleArea*depth
    triangleArea = √s(s−a)(s−b)(s−c)
    s = (a+b+c)/2

// */
'use script';
const prompt = require('prompt-sync')();
let w = +prompt('please enter width of your house: ');
let h = +prompt('please enter height of your house: ');
let d = +prompt('please enter depth of your house: ');
let s = (w + h + d) / 2;


function triangleArea() {
    return (Math.sqrt(s * (s - w) * (s - h) * (s - d)));
}

function roofVolume() {
    return triangleArea() * d;
}

function livingVolume() {
    return w * h * d;
}

function houseVolume() {
    return livingVolume() + roofVolume();
}
console.log(houseVolume());











