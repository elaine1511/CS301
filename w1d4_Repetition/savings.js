/*
Make a defining table and program to print out the balance of a savings account that compounds interest monthly. Prompt the user for the
• initial amount
• annual interest rate
• number of years to compound

INPUT: initialAmount, annualInterest, numYears
OUTPUT: final balance, and monthly balance
Process: 
- divide annual rate to monthly rate
- multiply years by 12 to get how many months
-calculate interest for each month in a loop and add to current balance
*/
const prompt = require('prompt-sync')();

const initialAmount = prompt('please enter initial amount: ');
const annualInterest = prompt('please enter annual interest rate: ');
const numYears = prompt('please enter number of years to compound: ');

const monthRate = annualInterest / 12;
const numMonth = numYears * 12;

let balance = initialAmount;

for (let i = 1; i < numYears; i++) {
    balance = balance + (balance * monthRate / 100);
}
console.log(balance);

