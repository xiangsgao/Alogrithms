/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
 // couldnt solve
 // you have to go in a number line and count the number of people the previous people before that day has share the secrets to
var peopleAwareOfSecret = function(n, delay, forget) {
    
    const MOD = Math.pow(10, 9) + 7; 
 
    const dp = Array(n).fill(0); // stands for days and number of people who knew tthe secrets on that day

    dp[0] = 1; // first day has one person knowing the secret

    for(let i = 1; i < n; i++){
        for(j = 0; j < i; j++){
            if(i < j + forget && i >= j + delay){
                dp[i] = (dp[i] + dp[j]) % MOD;
            }
        }
    }

    // sum up all the ones who have not forgotten
    let res = 0;
    for(let i = n - forget; i < n; i++){
        res = (res + dp[i]) % MOD;
    }

    return res;
};