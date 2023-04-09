const uniq = require("./uniq")
test("=", () => {
  expect(uniq([1,2,2,3])).toEqual([1,2,3]);
});
test("=", () => {
  expect(uniq([1,2,2,3,3,4])).toEqual([1,2,3,4]);
});
test("=", () => {
  expect(uniq([1,2,2,3])).toEqual([1,2,3]);
});
test("=", () => {
  expect(uniq([1,2,2,3])).toEqual([1,2,3]);
});
test("=", () => {
  expect(uniq([1,2,2,3])).toEqual([1,2,3]);
});

