/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 // idea is to first eliminate the impossible characters. they are the ones whose count are not at least k
 // after that then just brute force all the remaining characters using back tracking
 // whichever of them is the longest then lexigraphically greatest is the res
var longestSubsequenceRepeatedK = function(s, k) {
    const map = new Map();
    for(const c of s){
        map.set(c, (map.get(c) ?? 0) + 1);
    } 

    const candidates = [];

    // filter out the invalids
    for(const [key, value] of map.entries()){
        if(value >= k){
            candidates.push(key);
        }
    }


    // check if this is a valid subsquence
    // this basically just means that string s has this subsquence target
    const isValid = (target) =>{
        let j = 0;
        for(const c of s){
            if(c === target[j]) j++;
            if(j === target.length){
                return true;
            }
        }
        return false;
    }

    let res = "";

    // back tracking with recursion
    const recursion = (cur) =>{

        // longest has the higher priority
        if(cur.length > res.length){
            res = cur;
        }else if(cur.length === res.length && cur.localeCompare(res) > 0){
            // if same then lexigragucally greater
            res = cur;
        }

        // backtrack as long as the subsequence is valid and repeats k times
        for(const c of candidates){
            const next = cur + c;
            if(isValid(next.repeat(k))){
                recursion(next);
            }
        }
    }

    recursion("");

    return res;
};