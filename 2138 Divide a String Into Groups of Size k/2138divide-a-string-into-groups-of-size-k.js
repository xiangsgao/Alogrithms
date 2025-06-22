/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    
    const res = [];
    for(let i = 0; i < s.length; i+=k){
        let newS = "";
        for(let j = 0; j < k && j + i < s.length; j++){
            newS += s[i + j];
        }
        res.push(newS);
    }

    if(res.at(-1).length < k){
        res[res.length - 1] += fill.repeat(k - res.at(-1).length);
    }

    return res;
};