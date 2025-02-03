/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    
    // streaks
    let increasing = 1; 
    let decreasing = 1;
    let res = 1;
    for(let i = 1 ; i < nums.length; i++){
        const prev = nums[i - 1];
        const cur = nums[i];
        
        // decreasing
        if(prev > cur){
            decreasing+=1;
        }else{
            decreasing = 1;
        }

        // increasing 
        if(prev < cur){
            increasing+=1;
        }else{
            increasing = 1;
        }

        res = Math.max(increasing, decreasing, res);
    }

    return res;
};