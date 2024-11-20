/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {

    const count = [0, 0, 0];

    for(const c of s){
        count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    if(Math.min(...count) < k){
        return -1;
    }

    let res = Infinity;
    let l = 0;
    for(let r = 0; r < s.length; r++){
        const cur = s[r];
        count[cur.charCodeAt(0) - "a".charCodeAt(0)] -= 1;

        while(Math.min(...count) < k){
            count[s[l].charCodeAt(0) - "a".charCodeAt(0)] += 1;
            l += 1;
        }

        res = Math.min(res, s.length - (r - l + 1));
    }
   return res;

};