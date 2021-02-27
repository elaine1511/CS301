/*
Write a function named reverseDigits that reverses the digits of an input number value
- now call the function to with the digit 123
*/
function reverseDigits(num) {
    let reversed = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        reversed = reversed * 10 + lastDigit;
        n = Math.floor(n / 10);
    }
    console.log(reversed);
}

reverseDigits(123);
