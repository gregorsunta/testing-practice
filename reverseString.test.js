const reverseString = require('./reverseString');

test('test if returned string is reversed', () =>
  expect(reverseString('banana')).toStrictEqual('ananab'));
