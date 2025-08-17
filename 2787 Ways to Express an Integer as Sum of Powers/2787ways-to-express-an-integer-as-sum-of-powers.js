/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */

 // doing recursion, start at the bottom, try minus 1^2 all the way to x ^ 2 where x ^ 2 is less than n  
 // choose to minus or not to minus 1^x then choose 2^x, and so on. if at the end, the final value is 0 then it is one of the output
var numberOfWays = function(n, x) {

     const MOD = 1e9 + 7;
     const cache = new Map();
     const dp = (acc, i) =>{

        const key =`${acc},${i}`;

        if(acc === 0){
            return 1;
        }

        if(acc < 0){
            return 0;
        }

        if(cache.has(key)){
            return cache.get(key);
        }

        const cur = Math.pow(i, x) % MOD;
        if(cur > acc){
            return 0;
        }
        let res = 0;
        // take the current element raised to x
        res += dp(acc - cur, i + 1);
        // dont take the current element raised to x
        res += dp(acc, i + 1);
        res %= MOD;
        cache.set(key, res);
        return res;
     }

     return dp(n, 1);
    
};