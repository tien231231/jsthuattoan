//3.10
//4.1
/**
 * 
 * @param {Array} arr 
 * @returns 
 */
function countbubbleSort(arr) {
  const n = arr.length;
  let count = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {

        const temp = arr[j];
        arr[j] = arr[j + 1];
        count += 1;
        arr[j + 1] = temp;
      }
    }
  }
  return count;
}
console.log(countbubbleSort([1,8,5,3,6]));
module.exports = countbubbleSort;

