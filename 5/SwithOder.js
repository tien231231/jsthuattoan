//8 (err)
/**
 *
 * @param {Array} arr
 * @param {Number} id
 * @param {Number} order
 * @returns
 */
const SwithOrder = (arr, id, order) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id = id) {
      let temp = arr[i].order;
      arr[i].order = order;
      arr[order].order = temp;
    }
  }
  return arr;
};
console.log(SwithOrder([{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}],9,1))

module.exports = SwithOrder