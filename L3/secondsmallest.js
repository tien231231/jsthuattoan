
//3.1. Write a program that takes a list of numbers as input and returns the second smallest number in the list.
/**
 * 
 * @param {Array} arr 
 * @returns 
 */
const secondsmallest = (arr) => {
  console.log(arr.sort());
  let kq= arr.sort(function(a, b) {
    return a - b;
  });
  return kq[1];
};
console.log(secondsmallest([99,2,22,33,3,4,15,1,2,3]));
 module.exports = secondsmallest
