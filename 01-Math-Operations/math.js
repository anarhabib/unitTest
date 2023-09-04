const sum = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
    if(b === 0) throw new Error("Can not divide to 0")
  return a / b;
};

module.exports = { sum, subtract, multiply, divide };