const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(Array) {
  if (!Array) {
    return false;
  }
  // let test = Array.every(element => typeof element === "string"|| typeof element === "object" && element != false );
  // if (!test){
  //   return false
  //   }
  let team = "";
  try{
    let arr = Array.filter((element) => typeof element === "string").map((element) => element.toUpperCase().trim());
    arr.sort().forEach((element) => {
      team += element[0];
    });
    return team;
    
  }catch{
    return false
  }
  
}

module.exports = {
  createDreamTeam
};
