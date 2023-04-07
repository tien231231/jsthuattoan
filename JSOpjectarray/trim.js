// console.log(uniqArrayObject([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] ));
//6
/**
 *
 * @param {String} str
 * @returns
 */
const trim = (str) => {
  return (str.split("  ").join(" "));
};
module.exports = trim