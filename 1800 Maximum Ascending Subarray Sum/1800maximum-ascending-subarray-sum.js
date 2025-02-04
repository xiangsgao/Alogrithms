/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max = nums[0];
    let sum = nums[0];

    for(let i = 0; i < nums.length; i++){
        if(nums[i - 1] < nums[i]){
            sum += nums[i];
            max = Math.max(sum, max);
        }else{
            sum = nums[i];
        }
    }

    return max;
};