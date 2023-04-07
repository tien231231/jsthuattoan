
const secondsmallest = require("./secondsmallest")

test("= ", () => {
  expect(secondsmallest([99,2,3,4,15,1,2,3])).toEqual(2);
});
test("= ", () => {
  expect(secondsmallest([99,1,2,3])).toEqual(2);
});
test("= ", () => {
  expect(secondsmallest([99,3])).toEqual(99);
});
test("= ", () => {
  expect(secondsmallest([,  ,1,2,3])).toEqual(2);
});
test("= ", () => {
  expect(secondsmallest([15,1,2,3])).toEqual(2);
});