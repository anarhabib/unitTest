const reverseString = (str) => {
    if (typeof str !== "string") {
      throw new Error("Enter string value");
    }
  
    if(!str.trim()) {
      throw new Error('Empty place!');
    }
  
    return str.trim().split("").reverse().join("");
  };
  
  
  module.exports = {reverseString}