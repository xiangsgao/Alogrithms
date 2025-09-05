/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
 // dp[i]= dp[i+1]+dp[i+2]+⋯+dp[i+maxPts] / maxPts
// fck this question​

var new21Game = function(n, k, maxPts) {
    if(k === 0){
        return 1;
    }

    let windowSum = 0;
    for(let i = k; i < k + maxPts; i++){
        windowSum += i <= n ? 1 : 0;
    }

    const dp = new Map();

    for(let i = k - 1; i >= 0; i--){
        dp.set(i, windowSum / maxPts);
        let remove = 0;
        if(i + maxPts <= n){
           remove =  dp.get(i + maxPts) ?? 1;
        }
        windowSum += dp.get(i) - remove;
    }

    return dp.get(0);


};