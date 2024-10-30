/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let cur = 0;
    for(let i = 0; i < nums.length; i++){
        cur+= nums[i];
        max = Math.max(cur, max)
        if(cur < 0){
            cur = 0;
        }
        
        
    }

    return max;
};