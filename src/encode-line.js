const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine (str) {
  let array = str.split('');
  let count = 0;
  let subarr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      count++;
    } else {
      if (count !== 0) {
        subarr.push(count + 1);
        subarr.push(array[i]);
        count = 0;
      } else {
        subarr.push(array[i]);
        count = 0;
      }
    }
  }
  return subarr.join('');
}

module.exports = {
  encodeLine
};
