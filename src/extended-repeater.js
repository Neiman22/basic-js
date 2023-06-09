const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater (str, options) {
  str = String(str);
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let separator = options.separator !== undefined ? options.separator : '+';
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  let subStr = str + Array(additionRepeatTimes).fill(addition).join(`${additionSeparator}`);
  let result = Array(repeatTimes).fill(subStr).join(`${separator}`);
  return result;
}


module.exports = {
  repeater
};
