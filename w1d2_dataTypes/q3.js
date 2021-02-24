/* An employee at a grocery store must frequently place boxes of cans in stacks. 
Write a program that allows him to enter the total number of boxes and the number of boxes he will place in each stack. 
Your program must output the number of stacks he will have to make. 
All the stacks except the last one must have the exact number of boxes that the employee specifies. 
The last stack must have the exact number or fewer boxes. 
For example, if the employee enters 74 total boxes and 6 boxes in each stack your program must output 13.
*/

const prompt = require('prompt-sync')();

let num_boxes = +prompt('Please enter the total number of boxes: ');

let num_boxes_on_stack = +prompt('Please enter the number of boxes will place in each stack: ');

let num_stack = Math.ceil(num_boxes / num_boxes_on_stack);

console.log('The number of stacks he will have to make is ' + num_stack + " stacks.");
