const getPage = require("./get_page");
const dbList = [73, 18, 52, 19, 42, 77, 60, 39, 20, 12, 16, 109, 3];

//                               [pg 0]  [pg 1]  [pg 2]  [pg 3] [pg 4
// let dbList = [73, 18, 52, 19, 42, 77, 60, 39, 20, 12, 16, 109, 3];
//           pg 4]  [pg 5 ] [p6]
// (dbList, pageSize=2, pivot=42, pageNumber=2) => [20, 12]
// (dbList, pageSize=2, pivot=42, pageNumber=97) => []
// (dbList, pageSize=2, pivot=42, pageNumber=5) => [18, 52]
// (dbList, pageSize=2, pivot=42, pageNumber=6) => [19]
test("basic case (dbList, pageSize=2, pivot=42, pageNumber=5) => [20, 12]", () => {
  expect(getPage(dbList, 2, 42, 2)).toEqual([20, 12]);
});
test("high page number beyond element count ([], pageSize=2, pivot=42, pageNumber=2) => [20, 12]", () => {
  expect(getPage([], 2, 42, 2)).toEqual([]);
});
test("rotation case 1 half rotate (dbList, pageSize=2, pivot=42, pageNumber=4) => [3, 73]", () => {
  expect(getPage(dbList, 2, 42, 4)).toEqual([3, 73]);
});
test("rotation case 2 full rotate (dbList, pageSize=2, pivot=42, pageNumber=5) => [18, 52]", () => {
  expect(getPage(dbList, 2, 42, 5)).toEqual([18, 52]);
});
test("rotation case 3 end of list (dbList, pageSize=2, pivot=42, pageNumber=6) => [19]", () => {
  expect(getPage(dbList, 2, 42, 6)).toEqual([19]);
});
test("Pivot not found in list", () => {
  expect(() => {
    getPage(dbList, 2, -5, 2);
  }).toThrow("Pivot not found in list");
});
