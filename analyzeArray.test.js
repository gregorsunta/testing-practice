const analyzeArray = require('./analyzeArray');

test('test if the returned value is an object with average, min, max and length properties', () =>
  expect(
    analyzeArray([1, 2, 3, 4, 5]).toStrictEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    }),
  ));
