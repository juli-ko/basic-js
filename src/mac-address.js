const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split("-"); 
  let arr2 = n.split('');
  let arr3 =['-','0','1','2','3','4','5','6','8','9','A','B','C','D','E','F'];
  if (arr.every((elem)=>elem.length===2)){
    if (arr2.every((elem)=>arr3.includes(elem))){
      return true
    }
  }
  return false
}
module.exports = {
  isMAC48Address
};
