const incrementIndex = require("./increment_index");

test("Increment index from 1 to 2 when length is 100", () => {
  expect(incrementIndex(1, 100)).toBe(2);
});
test("Increment index from 98 to 99 when length is 100", () => {
  expect(incrementIndex(98, 100)).toBe(99);
});
test("Increment index from 99 to 0 when length is 100", () => {
  expect(incrementIndex(99, 100)).toBe(0);
});
test("Increment index from 50 to 51 when length is 100", () => {
  expect(incrementIndex(50, 100)).toBe(51);
});
test("Increment index from 99 to 0 when length is 100", () => {
  expect(() => {
    incrementIndex(100, 100);
  }).toThrow("Index cannot be equal to length");
});
test("Increment index from 1 to 2 when length is 3", () => {
  expect(incrementIndex(1, 3)).toBe(2);
});
