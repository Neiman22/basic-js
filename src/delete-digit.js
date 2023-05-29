const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = String(n);
  let maxNumber = 0;
  for (let i = 0; i < str.length; i++) {
    let subArr = str.split('');
    subArr.splice(i, 1)
    let num = Number(subArr.join(''));
    if (maxNumber < num) maxNumber = num;
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
