/**
 * @param {string} s
 * @return {string}
 */
 // failed to solve because very difficult and i dont realize we can convert string to integer representation and then check if they are equal to see if they are palidrome. if starting from the right === left then they are palidrome. also, failed to realize that for this question, we just need to find the longest palidrome starting from the beginning and any remining characters at the end can just be reverse and add to the beginning to make this palidrome
var shortestPalindrome = function(s) {
    
  let prefix = 0;
  let suffix = 0;
  const base = 29;
  let lastIdx = 0;
  let power = 1;
  const mod = Math.pow(10, 9) + 7;

  for(let i = 0; i < s.length; i++){
    const c = s.charCodeAt(i) - "a".charCodeAt(0) + 1; 
    
    prefix = (prefix * base) % mod;
    prefix = (prefix + c) % mod;
    suffix = (suffix + c * power) % mod;
    power = (power * base) % mod;

    if(prefix === suffix){
        lastIdx = i;
    }
  }
   
  suffix = s.substring(lastIdx + 1, s.length);

  return suffix.split("").reverse().join("") + s;


};