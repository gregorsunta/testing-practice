const analyzeArray = function (arr) {
  return {
    average:
      Math.round((arr.reduce((el, acc) => el + acc) / arr.length) * 100000) /
      100000,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};
module.exports = analyzeArray;
