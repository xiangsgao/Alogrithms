/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const sorted = candidates.sort((a, b) => a - b);
    // const sorted = candidates;

    const res = new Set();
    const map = new Map();
    const bf = (i = 0, sum = 0, str = "") =>{
        const key = `${i},${sum},(${str})`

        if(map.has(key)){
            return;
        }

        map.set(key, true);

        if(sum === target){
            res.add(str);
            return;
        }

        if(sum > target || i >= sorted.length){
            return;
        }

        const cur = candidates[i];
        bf(i+1, sum + cur, str ? str + `,${cur}` : `${cur}`);
        bf(i + 1, sum, str);
    }

    
    bf();
    
    return [...res.values()].map(e => e.split(",").map(x => Number(x)));
};