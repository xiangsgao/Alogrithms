/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  const map = new Map();
  let res = "";
  let i = 0;
  while(i < s.length){
    const cur = s[i];
    let streak = 1;
    i++;
    while(s[i] === cur){
        i++;
        streak++;
    }

    res += cur.repeat(Math.min(2, streak));  
  }

  return res;


};