const incrementIndex = require("./increment_index");
function debugLog(message) {
  /* istanbul ignore next */
  if (process.env.DEBUG) console.log(message);
}
function getPage(dbList, pageSize, pivot, pageNumber) {
  debugLog(
    `getPage(dbList.length=${dbList.length}, pageSize=${pageSize}, pivot=${pivot}, pageNumber=${pageNumber})`,
  );
  if (!dbList.length) return [];
  const pivotIndex = dbList.indexOf(pivot);
  if (pivotIndex === -1) throw new Error("Pivot not found in list");
  let responseList = [];

  const indexesAfterPivot = pageNumber * pageSize;
  debugLog(`indexesAfterPivot=${indexesAfterPivot}`);
  const initialIndex = pivotIndex + indexesAfterPivot;
  debugLog(`initialIndex=${initialIndex}`);
  const initialIndexRotated = (pivotIndex + indexesAfterPivot) % dbList.length;
  debugLog(`initialIndexRotated=${initialIndexRotated}`);

  let i = initialIndexRotated;
  const isInitialIndexRotated = initialIndex > dbList.length - 1;
  debugLog(`isInitialIndexRotated=${isInitialIndexRotated}`);
  while (
    i !== (initialIndexRotated + pageSize) % dbList.length &&
    ((isInitialIndexRotated && i < pivotIndex) || !isInitialIndexRotated)
  ) {
    responseList.push(dbList[i]);
    debugLog(`responseList=[${responseList}]`);
    i = incrementIndex(i, dbList.length);
    debugLog(`index=${i}`);
  }
  return responseList;
}
module.exports = getPage;
