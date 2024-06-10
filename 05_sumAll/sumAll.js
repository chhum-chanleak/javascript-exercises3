const sumAll = function(init, termi) {

  if ((init < 0 || termi < 0) || (typeof(init) !== 'number' || typeof(termi) !== 'number')) {
    return "ERROR";
  }

  const reverseInit = termi;
  const reverseTermi = init;

  if (init > termi) {
    init = reverseInit;
    termi = reverseTermi;
  }

  const sumTimes = termi - init;
  let diff = 1;
  let nextNum;
  let totalSum = init;

  for (let i = 0; i < sumTimes; i += 1) {
    nextNum = init + diff;
    diff += 1;
    totalSum += nextNum;
  }

  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
