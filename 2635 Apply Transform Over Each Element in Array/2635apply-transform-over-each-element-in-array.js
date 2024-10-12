/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const retval = [];
    for(let i = 0; i < arr.length; i++){
        const n = arr[i];
        const mapped = fn(n, i);
        retval.push(mapped);
    }

    return retval;
};