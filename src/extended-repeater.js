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
 * repeater('STRING', 
 * { 
 *  repeatTimes: 3, 
 *  separator: '**', 
 *  addition: 'PLUS',
 *  additionRepeatTimes: 3, 
 *  additionSeparator: '00' 
 * } )
 * 
 * => 'STRING PLUS00PLUS00PLUS ** STRINGPLUS00PLUS00PLUS ** STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';
  const additionalStr = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  return (str + additionalStr + separator).repeat(repeatTimes).slice(0, -separator.length);
}

console.log(repeater('STRING',
  {
    repeatTimes: 3,
    separator: '**',
    addition: 'PLUS',
    additionRepeatTimes: 3,
    additionSeparator: '00'
  }))

module.exports = {
  repeater
};
