/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const map = {};

    for(const w of words1){
        const wm = {}
        for(const c of w){
            wm[c] = (wm[c] ?? 0) + 1;
        }
        map[w] = wm;
    }

    const maxFreq = {}
    for(const w of words2){
        const wm = {}
        for(const c of w){
            wm[c] = (wm[c] ?? 0) + 1;
            maxFreq[c] = Math.max(maxFreq[c] ?? 0, wm[c]);
        }
    }

    const res = new Set(words1);

    for(const w of res.values()){
        for(const key of Object.keys(maxFreq)){
            if((map[w][key] ?? 0) < maxFreq[key]){
                res.delete(w);
                break;
            }
        }
    }

    return [...res.values()];
};