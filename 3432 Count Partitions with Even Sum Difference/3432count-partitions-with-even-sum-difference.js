/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    const arr = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        const cur = nums[i];
        arr[i] = cur + arr[i - 1];
    }

    let res = 0;
    for(let i = 1; i < arr.length; i++){
        const left = arr[i - 1];
        const cur = arr[arr.length - 1] - left;
        if(Math.abs(left - cur) % 2 === 0){
            res += 1;
        }
    }

    return res;
};