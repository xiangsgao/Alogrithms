/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let negativeIndex = -1;
    while(low <= high){
        const mid = low + Math.floor((high - low) / 2);
        const curElement = nums[mid];

        if(curElement < 0){
           negativeIndex = mid;
           low = mid + 1; // move right
        } else{
            high = mid - 1; // move left
        }

    }

    // search for the positive index that is none zero element
    low = negativeIndex + 1;
    high = nums.length - 1;
    let positiveIndex = nums.length;
    while(low <= high){
        const mid = low + Math.floor((high - low) / 2);
        const cur = nums[mid];
        if(cur > 0){
           positiveIndex = mid;
            high = mid - 1;
        }else{
            low = mid + 1;    
        }
    }

    return Math.max(negativeIndex + 1, nums.length - positiveIndex);
};