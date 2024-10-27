/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = Array(nums.length).fill().map(() => 1);

    let max = 1;
    for(let i = 1; i < nums.length; i++){
        for(let j = i - 1; j >= 0; j--){
            if(nums[j] < nums[i] && dp[j] + 1 > dp[i]){
                dp[i] = dp[j] + 1;
                max = Math.max(max, dp[i]);
            }
        }
    }

    return max;

};