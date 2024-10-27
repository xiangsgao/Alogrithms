/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sums = nums.reduce((a,e) => a + e, 0);

    if(sums % 2 !== 0){
        return false;
    }

    let dp = new Set();
    dp.add(0);
    const target = sums / 2;

    // caculate all the possible sums
    for(let i = nums.length - 1; i >= 0; i--){
        const nextDp = new Set();
        for(const t of dp.values()){
            nextDp.add(t + nums[i]);
            nextDp.add(t);
        }
        dp = nextDp;
    }

    return dp.has(target);

};