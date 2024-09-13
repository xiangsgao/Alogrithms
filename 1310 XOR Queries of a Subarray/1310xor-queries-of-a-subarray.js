/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const res = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        res[i] = res[i - 1] ^ arr[i];
    }
    const retval = [];
    for(const [start, end] of queries){
        retval.push(res[end] ^ res[start - 1]);
        
    }
    return retval;
};