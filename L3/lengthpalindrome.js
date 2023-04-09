/**
 * 3.7. Write a program that takes a string as input and returns the length of the longest palindrome that can be formed by rearranging the characters in the string.
 * @param {String} str 
 * @returns 
 */
const lengthpalindrome =(str) =>{
    
const result = str.replace(/ /g, "").toLowerCase().split("").join("")


    return result.length
}
console.log(lengthpalindrome("A man a plan a canal Panama"));

module.exports = lengthpalindrome