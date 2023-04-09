const SwithOrder = require("./SwithOrder")
test("=", () => {
  expect(SwithOrder([{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}],2,1)).toEqual([ { id: 2, order: 1 }, { id: 2, order: 2 }, { id: 2, order: 1 } ]);
});

