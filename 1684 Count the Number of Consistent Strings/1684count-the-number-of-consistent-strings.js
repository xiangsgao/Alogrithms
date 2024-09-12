/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const set = new Set(allowed);
    const retval = words.filter((e) => {
        const curSet = new Set(e);
        let same = true;
        for(const c of curSet.values()){
            if(!set.has(c)){
                same = false;
                break;
            }
        }
        return same;
    });
    return retval.length;
};