//3
/**
 *
 * @param {Array} arr
 * @returns
 */
const uniq = (arr) => {
  return ([...new Set(arr)]);

};

module.exports = uniq