const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};

const calculator = (num1, num2, fun) => {
  return fun(num1, num2);
};

console.log(calculator(5, 2, add));

// Here calculator is highest order function and add,sub amd mul are callback function
