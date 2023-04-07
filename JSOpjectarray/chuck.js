//2
/**
 *
 * @param {Array} arr
 * @param {Number} index
 */
const chuck = (arr, index) => {
  let kq = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < index; i++) {
      temp.push(arr[j]);
    }

    kq.push(temp);
  }


};
exports.chuck = chuck;
