const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(str1, str2) {
  let count = 0;
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  for (let i = 0; i < arr1.length; i++ ) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
        arr1.splice(i, 1);
        i--;
        arr2.splice(j, 1);
      }
    }
  }
  return count
};

module.exports = {
  getCommonCharacterCount
};
