/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // the key is to realize we just need to realize that cur element sum minus previous index element sum = target sum then res += 1. since there might be many such previous subarrays, we count their frequency
var subarraySum = function(nums, k) {
    
    const prefix = new Map();
    prefix.set(0, 1);
    let sum = 0;
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        const dif = sum - k;
        if(prefix.has(dif)){
            res += prefix.get(dif);
        }
        prefix.set(sum, (prefix.get(sum) ?? 0) + 1);
    }

    return res;
};