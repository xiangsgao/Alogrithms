/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function(s, target) {
    
  if (!s.includes("1") && target.includes("1")) return false; 
  if (s.includes("1") && !target.includes("1")) return false; 
  return true;


};