const reverse = require("./reverse")
test("=", () => {
  expect(reverse([1,2,3])).toEqual([3,2,1]);
});
test("=", () => {
  expect(reverse([1,2,"t"])).toEqual(["t",2,1]);
});

test("=", () => {
  expect(reverse([1,2,3,5,6])).toEqual([6,5,3,2,1]);
});

test("=", () => {
  expect(reverse([1,2,3])).toEqual([3,2,1]);
});

test("=", () => {
  expect(reverse([1,2,3])).toEqual([3,2,1]);
});
