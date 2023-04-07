const couttingsrt = require("./couttingsrt")
test("=", () => {
  expect(couttingsrt("fsdf sdfsdf sdfsd")).toEqual(3);
});
test("=", () => {
  expect(couttingsrt("fsdf")).toEqual(1);
});
