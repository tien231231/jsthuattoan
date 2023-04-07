const binhphuong = require("./binhphuong");

test("=", () => {
  expect(binhphuong(2)).toBe(4);
});
test("=", () => {
  expect(binhphuong(3)).toBe(9);
});

test("=", () => {
  expect(binhphuong(4)).toBe(16);
});
test("=", () => {
  expect(binhphuong(5)).toBe(25);
});
test("=", () => {
  expect(binhphuong(6)).toBe(36);
});
