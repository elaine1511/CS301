/* eslint-disable strict */
/* eslint-disable require-jsdoc */


function arrEquals(arr1, arr2) {
    // check length of 2 arrays before comparing
    if (arr1.length !== arr2.length) return false;

    let comparator = (a, b) => a - b; //sort based on this rule
    arr1.sort(comparator);
    arr2.sort(comparator);

    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log(arrEquals([1, 2, 3], [2, 1, 4]));