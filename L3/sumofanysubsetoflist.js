
function sumofanysubsetoflist(arr) {
    arr.sort((a, b) => a - b);
    let result = 1;
  
    for (const num of arr) {
      if (num <= result) {
        result += num;
      } else {
        return result;
      }
    }
  
    return result;
  }
  console.log(sumofanysubsetoflist([1, 2, 3, 7, 8, 20]));
  module.exports = sumofanysubsetoflist
