/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const retval = [];
    for(let i = 0; i < arr.length; i++){
        const n = arr[i];
        const pass = fn(n, i);
        if(pass){
            retval.push(n);
        }
    }

    return retval;
};