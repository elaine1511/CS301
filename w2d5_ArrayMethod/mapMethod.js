// Map method creates a new array with the results of calling a callback on every element in the array

"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = numbers.map(function (num) {
    return num * 2;
});

console.log(double);

const movies = [
    {
        title: "Titanic",
        score: 99
    },
    {
        title: "Avatar",
        score: 100
    },
    {
        title: "Batman",
        score: 95
    },
]

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
});
console.log(titles);