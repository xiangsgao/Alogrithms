/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
     const totalUnqiue = (new Set(nums)).size;
     let left = 0;
     const unqiue = new Map();
     let res = 0;
     for(let right = 0; right < nums.length; right++){
        
        const cur = nums[right];
        unqiue.set(cur, (unqiue.get(cur) ?? 0) + 1)

        while(totalUnqiue === unqiue.size){
            res += nums.length - right;
            unqiue.set(nums[left], unqiue.get(nums[left]) - 1);
            if(unqiue.get(nums[left]) === 0){
                unqiue.delete(nums[left]);
            }
            left++;
        }
     }

     return res;
};