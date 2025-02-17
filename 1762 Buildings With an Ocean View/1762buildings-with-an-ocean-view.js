/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let max = -Infinity;
    const res = [];
    for(let i = heights.length - 1; i >= 0; i--){
        const cur = heights[i];
        if(cur > max){
            res.unshift(i);
        }
        max = Math.max(cur, max);
    }
    return res;
};