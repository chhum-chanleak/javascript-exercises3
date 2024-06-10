const reverseString = function(string) {
  let convertedString = string.split("");
  let newString = [];

  for (let i = 0; i < convertedString.length; i += 1) {
    newString.push(convertedString.pop());
    i -= 1;
  }

  return newString.join("");
};

// Do not edit below this line
module.exports = reverseString;
