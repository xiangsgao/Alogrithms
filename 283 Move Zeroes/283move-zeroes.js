/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;

    for(let j = 0; j < nums.length; j++){

        const e = nums[i];
        const e2 = nums[j];

        if(e2 !== 0){
            nums[i] = e2;
            nums[j] = e;
            i++;
        }

    }

    return nums;
};