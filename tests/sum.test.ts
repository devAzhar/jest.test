const sum = require("../modules/add");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds "1" + "2" to equal 3', () => {
  expect(sum("1", "2")).toBe(3);
});

test("adds 1.2 + 2 to equal 3.2", () => {
  expect(sum(1.2, 2)).toBe(3.2);
});

test("adds -1 + -2 to equal -3", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("adds 1 to equal 1", () => {
  expect(sum(1)).toBe(1);
});

test("adds to equal 0", () => {
  expect(sum()).toBe(0);
});

test("adds 1 + 2 + 3 to equal 6", () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test("adds 1 + '2a' + 3 to equal 6", () => {
  expect(sum(1, "2a", 3)).toBe(4);
});

test("adds [1,2,3,5,6,7,8,9] to equal 42", () => {
  expect(sum(...[1, 2, 3, 5, 6, 7, 8, 9])).toBe(41);
});
