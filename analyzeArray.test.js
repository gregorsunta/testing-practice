const analyzeArray = require('./analyzeArray');

test(
  'test if the returned value is an object with average, min, max and length properties',
  () =>
    expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    }),
  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toStrictEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  }),
  expect(analyzeArray([1, 2, 3, 4, 5, 7])).toStrictEqual({
    average: 3.66667,
    min: 1,
    max: 7,
    length: 6,
  }),
  expect(analyzeArray([0.1, 2, 3, 4, 5, 7, 50, 612])).toStrictEqual({
    average: 85.3875,
    min: 0.1,
    max: 612,
    length: 8,
  }),
);
