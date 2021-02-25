
/* Defining table:
Input: 
    status of borrowers: student, faculty, or other
    number of books are overdue for each borrower
Processing:
- Check the status of borrowers
    + if status is student, then check the numbers of overdue books in a nested if
     Depend on numbers of book overdue, we determine their loan duration
    + if status is faculty, then check the numbers of overdue books in a nested if
     Depend on numbers of book overdue, we determine their loan duration
    + if status is other, then check the numbers of overdue books in a nested if
     Depend on numbers of book overdue, we determine their loan duration
       
Output: 
    loan duration in weeks: how long someone may borrow a book before it is due
*/


'use strict';

const prompt = require('prompt-sync')();

let status = prompt('Please enter your type of brrower: '); // input
let num_overdue_books = +prompt('Please enter your number of overdued books: '); //input
let loan_duration; //output

if (status === 'student') {
    if (num_overdue_books >= 3) {
        loan_duration = 2;
    }
    else if (num_overdue_books > 0) {
        loan_duration = 4;
    }
    else if (num_overdue_books == 0) {
        loan_duration = 6;
    }
}
else if (status === 'faculty') {
    if (num_overdue_books >= 3) {
        loan_duration = 8;
    }
    else if (num_overdue_books > 0) {
        loan_duration = 10;
    }
    else if (num_overdue_books == 0) {
        loan_duration = 12;
    }
}
else if (status === 'other') {
    if (num_overdue_books >= 3) {
        loan_duration = 2;
    }
    else if (num_overdue_books > 0) {
        loan_duration = 3;
    }
    else if (num_overdue_books == 0) {
        loan_duration = 4;
    }
}
console.log(`Your loan duration is ${loan_duration} weeks`);