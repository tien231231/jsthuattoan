// 4.8Write a program that takes a list of integers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list, with the additional constraint that no subset can contain any consecutive integers.
function checkk(arr, num1, num2) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === num1 && arr[i + 1] === num2) {
        return true;
      }
    }
    return false;
  }
  
  // Example usage:

  
  
  
  
const test = (nums) => {
const arr = []
  for(let target=1;target<nums[nums.length-1];target++  ){
    console.log(nums[nums.length-1]);
    for(let i =0;i<nums.length;i++){
      const remain = target - nums[i]
      
      if(nums.includes(remain)){
        if(checkk(nums,remain,nums[i])){
          return target
        }
      }
      
    }
    
   
      
      

    }
    return 0
}
  


console.log(test([1,2,3,4,5,6,20]));
