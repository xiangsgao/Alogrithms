/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const max = Math.max(...nums);
    let size = 0;
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        const n = nums[i];
        if(n === max){
            size += 1;
        }else{
            size = 0;
        }
        res = Math.max(res, size);
    }

    return res;
};