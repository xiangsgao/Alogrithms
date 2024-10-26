/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = Array(s.length).fill().map(() => false);
    dp[s.length] = true;
    for(let i = s.length - 1; i >= 0; i--){
        for(const w of wordDict){
            if(i + w.length <= s.length && (s.substring(i, i + w.length) === w)){
                dp[i] = dp[i + w.length];
            }
            if(dp[i]){
                break;
            }
        }
    }

    return dp[0];
};