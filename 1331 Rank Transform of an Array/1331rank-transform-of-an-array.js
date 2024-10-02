/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const ranks = [...new Set(arr).values()]
                   .sort((a, b) => a - b)
                   .reduce((acc, e, rank) => {
                     acc.set(e, rank + 1);
                     return acc;
                   }, new Map());
    
    const res = [];
    for(let i = 0; i < arr.length; i++){
        const cur = arr[i];
        res[i] = ranks.get(cur);
    }

    return res;
};