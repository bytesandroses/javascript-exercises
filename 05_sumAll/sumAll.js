const sumAll = function() {
  if (arguments[0] < 0 || arguments[1] < 0) {
    return "ERROR";
  }
  let minNum = Math.min(arguments[0], arguments[1]);
  let maxNum = Math.max(arguments[0], arguments[1]);
  let sumNumbers = 0;
  for (let i = minNum; i < maxNum + 1; i++) {
    sumNumbers += i;
  }
  return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
