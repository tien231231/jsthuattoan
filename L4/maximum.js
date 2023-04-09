/**
 * 4.6. Write a program that takes a list of strings as input and returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.
 * @param {*} arr 
 * @returns 
 */
const maximum =(arr) =>{
  let newarr =  arr.sort((a,b)=>a-b)
  let left = arr[0]*arr[2]*arr[arr.length-1]
  let right = arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3]
  return (left>right)?left:right
    
}
console.log(maximum([-1,-3,-2,0,1,2,3]));


