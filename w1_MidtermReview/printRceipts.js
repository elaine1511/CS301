/*
Write a program for a shop that prints receipts for the purchases made. 
First it asks for the number of items purchased and for each item it asks for the price of the item. 
Once the total price is computed, if the total price is more than $99, shop gives 10% discount to the customer before printing the receipt.

For e.g., if a customer purchases 3 items and price of items are $20, $30, and $50, this customer should get receipt of $90 i.e. ($100 – 10% of $100)
Your program just needs to show the amount charged, not the discount.

*/
const prompt = require('prompt-sync')();

let numItems = +prompt('Please enter the number of items purchased: ');

let counter = 0;

let sum = 0;

let amountCharged = 0;

do {
    let price = +prompt('Please enter the price of item: ');
    sum += price;
    counter++;
} while (counter < numItems);

if (sum > 99) {
    amountCharged = sum * 0.9;
} else {
    amountCharged = sum;
}

console.log(amountCharged);
