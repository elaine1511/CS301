"use strict";
/**
 * 
 * @param {array} arr is tested 
 * @param {number} indx is position to delete the element
 * @return {array} result arr
 */
function deleteArrayElement(arr, indx) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== indx) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}
console.log(deleteArrayElement([1, 4, -1, 3, 4, 7, 9, 4], 4));
