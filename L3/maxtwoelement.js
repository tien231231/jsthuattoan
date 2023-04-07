//3.2
/**
 * 
 * @param {Array} arr 
 * @returns 
 */
const maxtwoelement = (arr) => {
  let kq = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > kq) {
      kq = arr[i + 1] - arr[i];
      console.log(kq);
    }
    if (arr[i ] - arr[i+1] > kq) {
      kq = arr[i ] - arr[i+1];
    }
  }
  return kq;
};
console.log(maxtwoelement([1,2,98,99]));
module.exports = maxtwoelement