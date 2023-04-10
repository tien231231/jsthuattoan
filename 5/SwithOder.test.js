const SwithOrder = require("./SwithOrder")
test("=", () => {
  expect(SwithOrder([{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}],9,1)).toEqual([ { id: 10, order: 0 }, { id: 9, order: 1 }, { id: 12, order: 2 } ]);
});

