function debugLog(message) {
  /* istanbul ignore next */
  if (process.env.DEBUG) console.log(message);
}

function incrementIndex(index, length) {
  debugLog(`incrementIndex(index=${index}, length=${length})`);
  if (index == length) throw new Error("Index cannot be equal to length");
  if (index + 1 < length - 1) return index + 1;
  return (index + 1) % length;
}

module.exports = incrementIndex;
