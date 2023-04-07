//2.2. Write a program that takes a list of strings as input and returns the longest word in the list.
/**
 * 
 * @param {Array} arr 
 * @returns 
 */
const longestword = (arr) => {
  let kq = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > kq) {
      kq = arr[i].length;
      index = arr[i];
    }
  }
  return index;
};
console.log(longestword(["sdfsdfsdf","sdfsdfsdf","sdfsdfsdfsdfs"]));
module.exports = longestword
