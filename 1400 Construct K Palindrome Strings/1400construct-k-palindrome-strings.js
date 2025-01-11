/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {

    if(s.length < k){
        return false;
    }

    const map = new Map();

    for(const c of s){
        map.set(c, (map.get(c) ?? 0) + 1);
    }

    const values = [...map.values()];
    return values.reduce((acc, e) => acc +  (e % 2 === 0 ? 0 : 1), 0) <= k;
};