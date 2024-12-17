/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const shifted = k % nums.length;
    if(shifted === 0){
        return nums;
    }


    nums = nums.reverse();

    let left = 0;
    let right = shifted - 1;

    while(left < right){
        const leftE = nums[left];
        const rightE = nums[right];
        nums[left] = rightE;
        nums[right] = leftE;
        left++;
        right--;
    }

    left = shifted;
    right = nums.length - 1;
    
    while(left < right){
        const leftE = nums[left];
        const rightE = nums[right];
        nums[left] = rightE;
        nums[right] = leftE;
        left++;
        right--;
    }

    return nums;
};