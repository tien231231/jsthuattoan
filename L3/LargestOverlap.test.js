
const LargestOverlap = require("./LargestOverlap")

test("= ", () => {
  expect(LargestOverlap(["abcdefg", "cdefghijklm", "ghijklmnopqr"] )).toEqual(['cdefghijklm', 'ghijklmnopqr']);
});
test("= ", () => {
  expect(LargestOverlap([1,2,99])).toEqual(97);
});
// test("= ", () => {
//   expect(maxtwoelement([1,2,98,99])).toEqual(1);
// });
test("= ", () => {
  expect(LargestOverlap([1,2,4,5,6,7,99])).toEqual(92);
});
// test("= ", () => {
//   expect(maxtwoelement([1,2,99,1,2,3])).toEqual(97);
// });
