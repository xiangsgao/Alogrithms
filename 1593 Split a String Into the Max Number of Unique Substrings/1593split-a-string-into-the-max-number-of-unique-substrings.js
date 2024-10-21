/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    const set = new Set();
    let max = 0;
    const backtrack = (i = 0) =>{
        max = Math.max(max, set.size);

        for(let j = i; j < s.length; j++){
            const subString = s.substring(i, j + 1);
            if(set.has(subString)){
                continue;
            }
            set.add(subString);
            backtrack(j + 1);
            set.delete(subString)
        }
    }

    backtrack();
    return max;
};