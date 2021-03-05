
/*
Write a function that checks if an array is palindrome by using a stack (pus and pop)
Do not modify the original array.
[1,2,1] 
*/
/**
 * 
 * @param {array} arr is an array to be tested
 * @return {boolean} true if the array is a palindrome array
 */
function isPalindrome(arr) {
    let copy = [];
    for (let a of arr) {
        copy.push(a);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr.shift() !== copy.pop()) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome([1, 2, 2, 5, 2, 1]));