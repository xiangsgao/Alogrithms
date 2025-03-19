/**
 * @param {number[]} nums
 * @return {number}
 */

 // failed to solve because couldnt come up with the greedy solution that if you flip all the 1 from left to right, then all the previous 1s are flipped and 1s can only end up possible in the last two elements. you can then just check to see if any of the two is a one, if yes then not possible to flip. minimum times to flip is from left most 1 to the right most 1s.
var minOperations = function(nums) {

    const flip = (nums, i) =>{
        nums[i] = nums[i] ? 0 : 1;
    }

     let res = 0;
     for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] === 0){
            flip(nums, i);
            flip(nums, i + 1);
            flip(nums, i + 2);
            res += 1; 
        }
     }

     if(!nums[nums.length - 1] || !nums[nums.length - 2]){
        return -1;
     }

     return res;
};