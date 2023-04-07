//2.1. Write a program that takes a list of numbers as input and returns the second largest number in the list.
/**
 * 
 * @param {Array} arr 
 * @returns 
 */
const maxsecond = (arr) => {
  return arr.sort()[arr.length - 2];
};
module.exports = maxsecond