/**
 * /2.3. Write a program that takes two strings as input and returns the longest common subsequence of the two strings.
 * @param { String} s1 
 * @param {String} s2 
 * @returns 
 */
const logestword2tring = (s1, s2)  =>{
    let kq = "";
    for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {
        let k = 0;
        while (s1[i + k] && s2[j + k] && s1[i + k] === s2[j + k]) {
          k++;
        }
        if (k > kq.length) {
          kq = s1.slice(i, i + k);
        }
      }
    }
    return kq;
  }
module.exports = logestword2tring
console.log(logestword2tring("abcdef", "abczyzcdef"));