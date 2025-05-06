/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.map((_, i) =>{
        return nums[nums[i]];
    })
};