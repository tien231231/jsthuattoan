const findminstring = require("./findminstring");

test("=", () => {
  expect(findminstring(["fghfgh", "fghfgh", "w"])).toEqual("w");
});

test("=", () => {
  expect(findminstring(["12312", "123123", "123", "1"])).toEqual("1");
});

test("=", () => {
  expect(findminstring(["q"])).toEqual("q");
});

test("=", () => {
  expect(findminstring(["12312", "123123", "123"])).toEqual("123");
});
test("=", () => {
  expect(findminstring(["12312", "123123", "123"])).toEqual("123");
});
