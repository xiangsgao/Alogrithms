/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    
    let res = 0;
    let curMax = values[0] - 1;
    for(let i = 1; i < values.length; i++){
        res = Math.max(res, values[i] + curMax);
        curMax = Math.max(curMax - 1, values[i] - 1);
    }

    return res;
};