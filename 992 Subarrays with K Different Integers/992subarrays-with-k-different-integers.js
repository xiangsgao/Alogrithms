/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 // the idea is a three pointer.
 // https://www.youtube.com/watch?v=etI6HqWVa8U
 // near is the min window at ptr right
 // far is the max window that is valid at ptr right
var subarraysWithKDistinct = function(nums, k) {
    
    let near = 0;
    let far = 0;
    const count = new Map();
    let retval = 0;
    for(let right = 0; right < nums.length; right++){
        const cur = nums[right];
        count.set(cur, (count.get(cur) ?? 0) + 1);

        while(count.size > k){
            count.set(nums[near], count.get(nums[near]) - 1);
            if(count.get(nums[near]) === 0){
                count.delete(nums[near]);
            }
            near += 1;
            far = near;
        }

        while(count.get(nums[near]) > 1){
            count.set(nums[near], count.get(nums[near]) - 1);
            near += 1;
        }

        if(count.size === k){
            retval += (near - far + 1);
        }
    }

    return retval;

};