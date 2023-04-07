
const maxnumarr = require("./maxnumarr")

test("=", () => {
  expect(maxnumarr([1,2,33])).toBe(33);
});
test("=", () => {
  expect(maxnumarr([])).toBe(0);
});
test("=", () => {
  expect(maxnumarr([1])).toBe(1);
});
test("=", () => {
  expect(maxnumarr([1,2,33,123,123,123423])).toBe(123423);
});
test("=", () => {
  expect(maxnumarr([1,2,33])).toBe(33);
});


