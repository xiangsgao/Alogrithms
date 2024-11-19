/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    

    let left = 0;
    let right = 0;
    const set = new Map();
    let sum = 0;
    let curSum = 0;
    while(right < nums.length){
       
        const cur = nums[right];
        set.set(cur, (set.get(cur) ?? 0) + 1);
        curSum += cur;

        if(right - left > k - 1){
            const e = nums[left];
            curSum -= e;
            left++;
            set.set(e, set.get(e) - 1);
            if(set.get(e) === 0){
                set.delete(e);
            }
        }
        
        
        if(right - left === k - 1 && set.size === k){
            sum = Math.max(curSum, sum);
        }

        right++;
        
    }

    return sum;
};