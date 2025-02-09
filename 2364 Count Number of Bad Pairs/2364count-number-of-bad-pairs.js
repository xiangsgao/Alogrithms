/**
 * @param {number[]} nums
 * @return {number}
 */
 // failed to do some basic algebra
var countBadPairs = function(nums) {
    let goodPairs = 0;
    let totalPairs = 0;
    const count = new Map();
    for(let i = 0; i < nums.length; i++){
        totalPairs += i;
        goodPairs += count.get(nums[i] - i) ?? 0;
        count.set(nums[i] - i, (count.get(nums[i] - i) ?? 0) + 1);
    }

    return totalPairs - goodPairs;
};