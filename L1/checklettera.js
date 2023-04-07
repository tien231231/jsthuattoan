//1.10
/**
 * /Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.
 * @param {String} str 
 * @returns 
 */
const checklettera = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    str[i].includes("a") ? (count += 1) : (count = count);
  }
  return count;
};
module.exports = checklettera