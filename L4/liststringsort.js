/**
 * 4.7. Write a program that takes a list of strings as input and returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.
 * @param {*} arr 
 * @returns 
 */
const liststringsort =(arr) =>{
   return arr.sort(
    (a,b)=>{
        if (a.length !== b.length) {
            return b.length -a.length ;
          } else {
            return a.localeCompare(b);
          }}
   )
    
}
console.log(liststringsort(["12312","bdasdas","adasdas","1"]));
