//4.9 Write a program that takes a list of integers as input and returns the length of the longest increasing subsequence of the numbers, with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1.
/**
 * 
 * @param {Array} arr 
 * @returns 
 */
function lengthoflongestincreasing(arr) {
    let count = 0
    let count2 = 0
    for(let i =1;i<arr.length;i++){
        
        
        if(arr[i-1]+1==(arr[i])){
            count2 += 1
            
            if(count2>count){
                count =count2
            }
            
        }else

            count2= 0
        
    }
    return count
  }
  console.log( lengthoflongestincreasing([1,2,3,4,6,7,8,9,10]));
 
  module.exports = lengthoflongestincreasing