/**
 * @param {number[]} nums
 * @return {number}
 */

 // failed to realize that if you have a total number of n 1s, you can just have a window of size n and the 0 can then just be filled in by any 1s outside the window in a swap. the min swap is just which ever window of size n has the most 1s

var minSwaps = function(nums) {
    const total = nums.filter(e => e === 1).length;
    nums = [...nums, ...nums];
    let left = 0;
    let right = 0;
    let maxOnes = 0;
    let curOnes = 0;
    for(;right < nums.length; right++){
        
        while(right - left + 1 > total){
            curOnes -= nums[left++];
        }

        curOnes += nums[right];
        maxOnes = Math.max(curOnes, maxOnes);
    }

    return total - maxOnes;
};