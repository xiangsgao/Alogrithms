/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums = nums.sort((a, b) => a - b);

    const search = (l, r, target) =>{
        while(l <= r){
            m = l + Math.floor((r - l) / 2);
            if(nums[m] >= target){
                r = m - 1;
            }else{
                l = m + 1;
            }
        }

        return r;
    }

    let res = 0;
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        const low = lower - cur;
        const up = upper - cur;
        const biggestIdx = search(i + 1, nums.length - 1, up + 1);
        const lowestIdx = search(i + 1, nums.length - 1, low);
        res += biggestIdx - lowestIdx;
    }
    return res
};