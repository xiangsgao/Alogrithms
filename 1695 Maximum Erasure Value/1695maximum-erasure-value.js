/**
 * @param {number[]} nums
 * @return {number}
 */
 // made a bug here last time
var maximumUniqueSubarray = function(nums) {
    

    let left = 0;
    const set = new Set();
    let score = 0;
    let max = -Infinity;
    for(let right = 0; right < nums.length; right++){
        const cur = nums[right];
        
        if(set.has(cur)){
            max = Math.max(score, max);
            while(set.has(cur)){
                const toDelete = nums[left++];
                set.delete(toDelete);
                score -= toDelete;
            }
        }
        score += cur;
        set.add(cur);
    }
 
    max = Math.max(score, max);

    return max;
};