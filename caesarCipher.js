const caesarCipher = function (str) {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const upperLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const cipher = function (str) {
    const arr = Array.from(str);
    const cipherLowerCase = function (letter) {
      const index = letters.indexOf(letter);
      if (index === letters.length) {
        return letters[0];
      }
      return letters[index + 1];
    };
    const cipherUppercase = function (letter) {
      const index = upperLetters.indexOf(letter);
      if (index === upperLetters.length) {
        return upperLetters[0];
      }
      return upperLetters[index + 1];
    };
    const arr2 = arr.map((letter) => {
      // let isUpperCase = undefined;
      const isUpperCase = () =>
        upperLetters.indexOf(letter) === -1 ? false : true;
      if (isUpperCase()) {
        return cipherUppercase(letter);
      } else if (!isUpperCase()) {
        return cipherLowerCase(letter);
      }
    });
    console.log(arr2.join(''));

    return arr2.join('');
  };
  return {
    cipher,
  };
};
const caesar = caesarCipher();
module.exports = caesarCipher;
