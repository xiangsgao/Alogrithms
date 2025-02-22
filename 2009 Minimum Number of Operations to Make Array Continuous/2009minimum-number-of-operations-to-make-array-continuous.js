/**
 * @param {number[]} nums
 * @return {number}
 */

 // cant solve because too difficult. basically, it is about finding the max range for every possible min
var minOperations = function(nums) {
    const N = nums.length;
    nums = [...(new Set(nums)).values()].sort((a, b) => a - b);
    let res = N;
    // max - min = nums.length - 1
    const max = N - 1 + nums[0];

    // [ 4, 5, 8, 8, 9, 9 ]
    let right = 0;
    for(let left = 0; left < nums.length; left++){
        // get all the possible max for all the left
        while(right < nums.length && nums[right] < nums[left] + N){
            right += 1;
        }

        const window = right - left;

        res = Math.min(res, N - window); // this means need to replace all the left and all the right outside the window
        
    }



    return res;

};