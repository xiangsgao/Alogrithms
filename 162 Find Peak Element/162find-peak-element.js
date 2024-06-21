/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function(nums) {
    if(!nums.length){
        -1;
    }

    if(nums.length === 1){
        return 0;
    }

    if(nums.length === 2){
        return nums[0] > nums[1] ? 0 : 1;
    }

    let low = 0;
    let high = nums.length - 1;
    let answer = 0;
    while(low <= high){
        const mid = low + Math.floor((high - low) / 2);
        const curElement = nums[mid];
        const next = nums[mid + 1];
        const previous = nums[mid - 1];

        if(next === undefined){
            return mid;
        }

        if(previous < curElement && next < curElement){
            return mid;
        }

        // if right is increasing
        if(next > curElement){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }

    return answer;

};