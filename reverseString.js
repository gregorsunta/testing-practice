const reverseString = function (str) {
  const arr = Array.from(str);
  const arr2 = [];
  while (arr[0]) {
    arr2.push(arr.pop());
  }
  return arr2.join('');
};

module.exports = reverseString;
