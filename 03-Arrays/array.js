const returnEvenNumbers = (array) => {
    if (array.length === 0) throw new Error("Array must have at least 1 element");
    
    return array.filter((num) => typeof num === "number" && num % 2 === 0);
  };
  
  module.exports = { returnEvenNumbers };
  