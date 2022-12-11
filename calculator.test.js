const calculator = require('./calculator');
const calc = calculator();
test('test if the value returned is correctly calculated', () => {
  expect(calc.add(2, 3)).toStrictEqual(5);
  expect(calc.divide(10, 5)).toStrictEqual(2);
  expect(calc.multiply(2, 3)).toStrictEqual(6);
  expect(calc.substract(2, 3)).toStrictEqual(-1);
});
