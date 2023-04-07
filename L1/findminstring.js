//1.5 Write a program that takes a list of strings as input and displays the shortest string in the list.
/**
 * 
 * @param {SafeArray} str 
 * @returns 
 */
const findminstring = (list) => {
  let kq = list[0]
  let temp = list[0].length;
  console.log(list[0]);
  
  
    for (let i = 0; i < list.length; i++) {
    if (list[i].length < temp) {
      
      temp = list[i];
      kq=list[i]
    }
  }
  return kq;
  
  
};

module.exports =  findminstring
console.log(findminstring([""]));