/* eslint-disable require-jsdoc */

"use strict";

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

console.log(matrix);
let total = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        total += matrix[i][j];
    }
}

console.log(total);


