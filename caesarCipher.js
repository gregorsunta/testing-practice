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
  const punctuations = [' ', '.', ','];
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
      const isUpperCase = () =>
        upperLetters.indexOf(letter) === -1 ? false : true;
      const isPunctuation = () =>
        punctuations.indexOf(letter) === -1 ? false : true;
      if (isPunctuation(letter)) {
        return letter;
      }
      if (isUpperCase()) {
        return cipherUppercase(letter);
      } else if (!isUpperCase()) {
        return cipherLowerCase(letter);
      }
    });
    return arr2.join('');
  };
  return {
    cipher,
  };
};
module.exports = caesarCipher;
