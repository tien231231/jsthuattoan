const sortlist = require("./sortlist")
test("=", () => {
  expect(sortlist(["bsdfsdf","afsdfsdf","zssdfsdf"])).toEqual(["afsdfsdf","bsdfsdf","zssdfsdf"]);
});