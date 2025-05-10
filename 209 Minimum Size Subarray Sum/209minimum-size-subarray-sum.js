/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    let left = 0;
    let curSum = 0;
    let min = Infinity;

    for(let right = 0; right < nums.length; right++){
        const rightE = nums[right];
        curSum += rightE;
        while(curSum >= target){
            min = Math.min(right - left + 1, min);
            curSum -= nums[left++];
        }
    }


    return min === Infinity ? 0 : min;

};