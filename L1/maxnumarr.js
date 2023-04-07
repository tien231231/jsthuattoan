/**
 * /1.4 Write a program that takes a list of numbers as input and displays the largest number in the list.
 * @param {Array} arr 
 * @returns 
 */
const maxnumarr = (arr) => {
    let kq = 0;
    arr.map((e) => {
      if (e > kq) {
        kq = e;
      }
    });
    return kq;
  };
  module.exports = maxnumarr
console.log(maxnumarr([1]));