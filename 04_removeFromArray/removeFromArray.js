const removeFromArray = function(initialArray, ...itemsToRemove) {
  const newArray = [];
  for (let index in initialArray) {
    let valueAtIndexI = initialArray[index];
    if (!itemsToRemove.includes(valueAtIndexI)) {
      newArray.push(valueAtIndexI);
    }
  }
  return newArray;
};

module.exports = removeFromArray;