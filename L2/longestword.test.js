const longestword = require("./longestword")

test("= ", () => {
  expect(longestword(["sdfsdfsdf","sdfsdfsdf","sdfsdfsdfsdfs"])).toBe("sdfsdfsdfsdfs");
});