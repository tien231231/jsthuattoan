
const sum = require("./sum")

test("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("4 + 5 = 9", () => {
  expect(sum(4, 5)).toBe(9);
});

test("-3 + 5 = 2", () => {
  expect(sum(-3, 5)).toBe(2);
});

test("-1 + -2 = -3", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("-1 + 1.5 = 0.5", () => {
  expect(sum(-1, 1.5)).toBe(0.5);
});

