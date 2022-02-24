const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
  if(arr.length == 0)
  {
    return 0;
  }
  const reducer = (accum, curr) => accum + curr;
  return arr.reduce(reducer);
};

const multiply = function(arr) {
  const reducer = (accum, curr) => accum * curr;
  return arr.reduce(reducer);
};

const power = function(num, exponent) {
	return num ** exponent;
};

const factorial = function(num) {
  let result = 1;
	for(let i = num; i > 0; i--)
  {
      result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
