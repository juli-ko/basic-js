const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
      function checkArr(arr){
        if (Array.isArray(arr)) {
          return 1 + Math.max(0, ...arr.map((elem) => checkArr(elem)));
        } else {
          return 0;
        }
      }
      return checkArr(arr) 
    }
      

}

module.exports = {
  DepthCalculator
};
