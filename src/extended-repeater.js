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
function repeater(str, options) {
  let result = str;
  let additionSum = "";
  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }
  if (!options.hasOwnProperty("addition")) {
    options.addition = "";
  }
  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }
  if (!options.hasOwnProperty("additionRepeatTimes")) {
    options.additionRepeatTimes = "1";
  }
  additionSum = options.addition;
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    additionSum += options.additionSeparator;
    additionSum += options.addition;
  }
  result += additionSum;
  for (let i = 1; i < options.repeatTimes; i++) {
    result += options.separator;
    result += str;
    result += additionSum;
  }
  return result;
}
module.exports = {
  repeater
};
