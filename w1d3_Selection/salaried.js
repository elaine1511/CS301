const prompt = require('prompt-sync')();

let sales = prompt('Please enter the sales: ');
let salaried = prompt('is this salaried? yes or no');

if (salaried === 'yes') {
    if (sales < 300) {
        console.log('no commission, sorry');
    }
    else if (sales < 500) {
        console.log('1 percent commission', 0.01 * sales);
    }
    else {
        console, log('2 percent commission', 0.02 * sales);
    }
}
else {
    if (sales < 300) {
        console.log('no commission, sorry');
    }
    else if (sales < 500) {
        console.log('2 percent commission', 0.02 * sales);
    }
    else {
        console, log('3 percent commission', 0.03 * sales);
    }
}