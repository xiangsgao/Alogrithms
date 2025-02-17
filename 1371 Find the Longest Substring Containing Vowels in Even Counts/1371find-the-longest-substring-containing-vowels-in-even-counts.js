/**
 * @param {string} s
 * @return {number}
 */
 // failed to solve because using bitmask is very clever
 // understood it after watching neetcode vid
var findTheLongestSubstring = function(s) {
    
    let res = 0;
    let mask = 0;
    const maskToIdx = new Map();
    maskToIdx.set(0, -1);
    const v = new Set("aeiou".split(""));

    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if(v.has(c)){
            mask = mask ^ (1 + c.charCodeAt(0) - "a".charCodeAt(0)); // this set the bit representing this vol in the bitmask. 0 means even, 1 means odd
        }

        // if this mask already exists, it is a valid substring from last seen to cur i
        if(maskToIdx.has(mask)){
            const len = i - maskToIdx.get(mask);
            res = Math.max(len, res);
        }else{
            maskToIdx.set(mask, i);
        }
    }
   

    return res;
};