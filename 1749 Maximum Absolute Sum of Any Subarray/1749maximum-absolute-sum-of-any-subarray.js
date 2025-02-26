/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let maxSum = nums[0];
    let curSum = nums[0];

    for(let i = 1; i < nums.length; i++){
        const n = nums[i];
        if(curSum < 0){
            curSum = 0;
        }
        curSum += n;
        maxSum = Math.max(curSum, maxSum);
    } 

    let minSum = nums[0];
    curSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        const n = nums[i];
        if(curSum > 0){
            curSum = 0;
        }
        curSum += n;
        minSum = Math.min(curSum, minSum);
    } 

    return Math.max(Math.abs(maxSum), Math.abs(minSum));
};