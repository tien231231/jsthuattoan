
const commonPrefix= require("./commonPrefix")
test("=", () => {
  expect(commonPrefix(["12312","12312","123"])).toEqual(3);
});
