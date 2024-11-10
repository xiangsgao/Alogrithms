/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(nums) {
          const dp = Array(nums.length).fill().map(() => Array(nums[0].length).fill(null));


    const dfs = (i, j, pre) =>{
        
        const cur = nums[i]?.[j];

        if(cur === undefined || pre >= cur){
            return 0;
        }

        if(dp[i][j] !== null){
            return dp[i][j];
        }

        let res = 1;
        res = Math.max(res, 1 + dfs(i - 1, j, cur), 1 + dfs(i + 1, j, cur), 1 + dfs(i, j - 1, cur), 1 + dfs(i, j + 1, cur));
        dp[i][j] = res;
        return res;

    }

    let max = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums[i].length; j++){
            max = Math.max(max, dfs(i, j, -1));
        }
    }

    return max;
};