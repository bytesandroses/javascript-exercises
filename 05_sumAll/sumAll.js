const sumAll = function() {
  let minNum = arguments[0];
  let maxNum = arguments[1];
  let sumNumbers = 0;
  for (let i = minNum; i < maxNum + 1; i++) {
    sumNumbers += i;
  }
  return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
