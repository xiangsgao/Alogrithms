/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
 // key is to union find and group all the equivilent characters together. ones that are lexigraphically smaller should be the ancestor. next is just use the find to get each ancestor of the character in the baseStr
var smallestEquivalentString = function(s1, s2, baseStr) {
  const roots = Array(26).fill().map((_, idx)=>idx);


  const find = (x) =>{
    if(roots[x] !== x){
        roots[x] = find(roots[x]);
    }

    return roots[x];
  }

  const union = (x, y) =>{
        const X = find(x);
        const Y = find(y);
        if(X === Y){
            return;
        }

        if(X < Y){
            roots[Y] = X;
        }else{
            roots[X] = Y;
        }
  }

  for(let i = 0; i < s1.length; i++){
    union( s1.charCodeAt(i) - "a".charCodeAt(0), s2.charCodeAt(i) - "a".charCodeAt(0));
  }

  let res = '';
  const abc = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 0; i < baseStr.length; i++){
    const root = find(baseStr.charCodeAt(i) - "a".charCodeAt(0));
 
    res = res + abc[root];
  }

  return res;
  
    
};