const caesarCipher = require('./caesarCipher');
const cC = caesarCipher();
test(
  'check if ceasarsCipher returns correct decryption key',
  () => expect(cC.cipher('banana')).toStrictEqual('cbobob'),
  expect(cC.cipher('BANANA')).toStrictEqual('CBOBOB'),
  expect(cC.cipher('banana')).toStrictEqual('cbobob'),
  expect(cC.cipher('BaNaNa')).toStrictEqual('CbObOb'),
  expect(cC.cipher('Ba Na Na')).toStrictEqual('Cb Ob Ob'),
  expect(cC.cipher('Ba, Na Na.')).toStrictEqual('Cb, Ob Ob.'),
);
