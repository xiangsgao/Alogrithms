/**
 * @param {number[]} nums
 * @return {number}
 */
 // couldnt solve because did figoure out xor can be used to unset the bits and for every pair to be zero, the entire subarray need to & up to zero
var longestNiceSubarray = function(nums) {
    let res = 0;
    let left = 0;
    let cur = 0;
    for(let right = 0; right < nums.length; right++){
        while(cur & nums[right]){
            cur = cur ^ nums[left++];
        }

        res = Math.max(res, right - left + 1);
        cur = cur | nums[right]; // or here because we want all the none overlapping 1s for the next iteration.
    }

    return res;
};