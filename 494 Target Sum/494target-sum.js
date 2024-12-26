/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
   const dp = Array(nums.length + 1).fill().map(() => new Map());
   dp[0].set(0, 1);

   for(let i = 0; i < nums.length; i++){
        for(const [sum, count] of dp[i].entries()){
            dp[i + 1].set(sum + nums[i], (dp[i + 1].get(sum + nums[i]) ?? 0) + count);
            dp[i + 1].set(sum - nums[i], (dp[i + 1].get(sum - nums[i]) ?? 0) + count);
        }
   }

    return dp[nums.length].get(target) ?? 0;
};