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
  n = n.toString(10).split("");
  let vars = [];
  for (let i = 0; i < n.length; i++) {
    let num = [...n];
    num.splice(i, 1);
    vars.push(Number(num.join("")));
  }
  return vars.sort((a, b) => a - b)[vars.length - 1];
}

module.exports = {
  deleteDigit
};


//создать массивб где есть все вариации удаления найти максимум