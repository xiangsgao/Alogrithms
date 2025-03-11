/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const letters = new Set("abc".split(""));
    let left = 0;
    const map = new Map(); 
    let res = 0;
    for(let right = 0; right < s.length; right++){
        const cur = s[right];
        if(letters.has(cur)){
            map.set(cur, (map.get(cur) ?? 0) + 1);
        }
        
        while(map.size === 3){
            const size = s.length - right;
            res += size;
            const leftCur = s[left++];
            map.set(leftCur, map.get(leftCur) - 1);
            if(map.get(leftCur) === 0){
                map.delete(leftCur);
            }
        }
    }

    return res;
};