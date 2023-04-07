
const findmediannum = require("./findmediannum")

test("=", () => {
  expect(findmediannum([1,2,3])).toBe(2);
});
test("=", () => {
  expect(findmediannum([1,2,3,3])).toBe(2.5);
});

test("=", () => {
  expect(findmediannum([123,223,3123])).toBe(223);
});

test("=", () => {
  expect(findmediannum([1,2,3])).toBe(2);
});

test("=", () => {
  expect(findmediannum([1,2,3])).toBe(2);
});

