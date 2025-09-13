/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const v = new Set(['a', 'e', 'i', 'o', 'u']);
    const cnt = new Map();
    const cnt2 = new Map();
    for(const e of s){

        if(v.has(e)){    
             cnt.set(e, (cnt.get(e) ?? 0) + 1);
        }else{
            cnt2.set(e, (cnt2.get(e) ?? 0) + 1);
        }
    }

    let retval = 0;

    if(cnt.size){
        retval += Math.max(...cnt.values());
    }

    if(cnt2.size){
        retval +=  Math.max(...cnt2.values());
    }
    return retval;
};