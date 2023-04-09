
//3.10. Write a program that takes a list of strings as input and returns the list sorted by the number of distinct characters in each string, with the shortest strings appearing first.
const sortlengtharr= (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};
const arr = ["apple", "banana", "pear", "orange", "grape"];

console.log(arr); // ["pear", "apple", "grape", "banana", "orange"]