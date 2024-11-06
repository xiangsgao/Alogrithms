/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    const countBits = (n) =>{
        let res = 0;
        while(n){
            res += n & 1;
            n = n >> 1;
        }
        return res;
    }

    let curMin = nums[0];
    let curMax = nums[0];
    let prevMax = -Infinity;

    for(const n of nums){
        if(countBits(n) === countBits(curMin)){
            curMin = Math.min(curMin, n);
            curMax = Math.max(curMax, n);
        }else{
            if(curMin < prevMax){
                return false;
            }
            prevMax = curMax;
            curMin = n;
            curMax = n;
        }
    }

    if(curMin < prevMax){
        return false;
    }

    return true;
};