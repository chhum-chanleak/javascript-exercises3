const removeFromArray = function(array, ...items) {

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < items.length; j += 1) {
      if (array[i] === items[j]){
        array.splice(i, 1);
        i -= 1;
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
