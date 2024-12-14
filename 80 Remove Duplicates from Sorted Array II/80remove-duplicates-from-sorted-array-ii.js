/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let l = 0;
    let r = 0;

    while(r < nums.length){
        let count = 1;
        while(r + 1 < nums.length && nums[r] === nums[r + 1]){
            r++;
            count++;
        }

        count = Math.min(2, count);

        for(let i = 0; i < count; i++){
            nums[l] = nums[r];
            l += 1;
        }
        r+=1;
    
    }

    return l;
    
};