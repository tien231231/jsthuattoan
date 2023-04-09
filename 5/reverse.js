/**
 * 1
 * @param {Array} arr
 * @returns
 */
function reverseArray(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return reverseArray(right).concat(reverseArray(left));
  }
}

console.log(reverseArray([1,2,3,5,6]));
module.exports = reverseArray