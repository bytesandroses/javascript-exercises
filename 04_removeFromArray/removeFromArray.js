const removeFromArray = function() {
  let argsLength = arguments.length;
  let initialArray = arguments[0];
  let initialArrayLength = initialArray.length;
  let finalArray = [];

  for (let i = 0; i < initialArrayLength; i++) {
    finalArray.push(initialArray[i]);
    for (let j = 0; j < argsLength - 1; j++) {
      if (initialArray[i] === arguments[j + 1]) {
        finalArray.pop();
      }
    }
  }

  return finalArray;
};

/* SOLUTION 2
const removeFromArray = function (array, ...args) {
  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};
*/

// Do not edit below this line
module.exports = removeFromArray;
