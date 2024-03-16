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

// Do not edit below this line
module.exports = removeFromArray;