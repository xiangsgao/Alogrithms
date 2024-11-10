/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(0));

   

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i === 0 && j === 0){
                 dp[i][j] = 1;
                 continue;
            }
            const up = dp[i - 1]?.[j] ?? 0;
            const left = dp[i][j - 1] ?? 0;
            dp[i][j] = up + left;
        }
    }

    return dp[m - 1][n - 1];
};