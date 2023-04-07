//4.3
/**
 * 
 * @param {String} strs 
 * @returns 
 */
function commonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return 0;
  }

  let result = '';
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== strs[i][j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
  }

  return prefix.length;
}
console.log(commonPrefix(["12312","12312","123"]));
module.exports = commonPrefix