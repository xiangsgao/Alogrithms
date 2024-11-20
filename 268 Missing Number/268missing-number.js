/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans ^= i;
    }
    for (let i = 0; i < nums.length; i++) {
        ans ^= nums[i];
    }
    return ans;
};