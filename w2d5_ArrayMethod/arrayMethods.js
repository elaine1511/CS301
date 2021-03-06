"use strict";

exports.insertArray = insertArray;

/* 0.  Write a function that will take an index and two arrays and splice the second array into the first at the given position */
/**
 * 
 * @param {*} index is int for arr index
 * @param {*} target is arr to be spliced
 * @param {*} insert hold elements to splice
 * @return {array} the spliced array
 */
function insertArray(index, target, insert) {
    target.splice(index, 0, ...insert);
    return target;
}