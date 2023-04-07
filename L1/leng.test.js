
const leng = require("./leng")

test("=", () => {
  expect(leng("tttt")).toBe(4);
});

test("=", () => {
  expect(leng("")).toBe(0);
});

test("=", () => {
  expect(leng("Quee ")).toBe(5);
});

test("=", () => {
  expect(leng("123*&^")).toBe(6);
});

test("=", () => {
  expect(leng("   ")).toBe(3);
});
