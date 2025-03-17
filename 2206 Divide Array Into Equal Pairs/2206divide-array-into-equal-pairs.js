/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const pairs = new Set();
    for(const n of nums){
        if(pairs.has(n)){
            pairs.delete(n);
        }else{
            pairs.add(n);
        }
    }

    return pairs.size === 0;
};