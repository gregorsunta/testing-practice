const capitalize = require('./capitalize');
test('test if the sent string is returned in upper case', () => {
  expect(capitalize('banana')).toStrictEqual('BANANA');
});
