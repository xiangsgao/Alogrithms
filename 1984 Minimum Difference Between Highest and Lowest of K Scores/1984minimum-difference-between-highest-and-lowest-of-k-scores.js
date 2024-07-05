/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums = nums.sort((a,b) => a-b)
    let ret = Number.POSITIVE_INFINITY;
    let left = 0;
    let right = k - 1;
    while(right < nums.length){
        const slice = nums.slice(left, right + 1);
        const max = Math.max(...slice);
        const min = Math.min(...slice);
        ret = Math.min(ret, max - min);
        right++;
        left++;
    }

    return ret;
};