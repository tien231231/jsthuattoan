//1.9 Write a program that takes a string as input and returns the number of words in the string.
/**
 * 
 * @param {String} str 
 * @returns 
 */
const couttingsrt = (str) => {
  return str.split(" ").length;
};
console.log(couttingsrt("fsdf sdfsdf    "));
module.exports = couttingsrt