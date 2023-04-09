/**
 * 
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns 
 */
//3.6 Write a program that takes two lists of integers as input and returns the median of the combined list.
const findmediannum = require("../L1/findmediannum")
const findmedianlist = (arr1,arr2) => {
    return(findmediannum(arr1.concat(arr2)))
    
    
  };

  module.exports = findmediannum;
  