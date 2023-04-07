/**
 * 
 * @param {Array} arr 
 * @returns 
 */
//1.8 Write a program that takes a list of numbers as input and returns the median of the numbers.
const findmediannum = (arr) => {
  return arr.length % 2 == 1
    ? arr[Math.floor(arr.length / 2)]
    : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
};

module.exports = findmediannum;
