/* eslint-disable require-jsdoc */
/* eslint-disable strict */
function getDistinctElement(arr) {
    arr.sort();
    let distinctArr = [];
    distinctArr.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) { //if elements are different, push to new arr. otherwise, do nothing
            distinctArr.push(arr[i]);
        }
    }
    return distinctArr;
}
console.log(getDistinctElement([1, 1, 2, 2, 2, 3, 4, 4, 6, 7]));
