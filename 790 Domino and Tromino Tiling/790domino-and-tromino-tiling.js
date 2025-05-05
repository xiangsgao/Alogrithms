/**
 * @param {number} n
 * @return {number}
 */

 // forget about the optimal way for this question. in real interview, just do the brute force backtracking
 // idea is basically figoure out all the states and then use a dp to cache. you just need t1 and t2 which stands for if upper row is empty and bottom row is empty respectively to answer the the possible ways of the next column
var numTilings = function(n) {
    const MOD = Math.pow(10, 9) + 7;

    const dp = Array(n + 1).fill().map(() => Array(4).fill());

    const makeState = (t1, t2) =>{
        let state = 0;
        if(t1){
            state |= 1;
        }

        if(t2){
            state |= 2;
        }

        return state;
    }

    const recursion = (i = 0, t1 = true, t2 = true) =>{
        if(i === n){
            return 1;
        }

        const state = makeState(t1, t2);
        if(dp[i][state] !== undefined){
            return dp[i][state];
        }

        const [t3, t4] = [i + 1 < n, i + 1 < n];
        let count = 0;

        if(t1 && t2 && t3){
            count += recursion(i + 1, false, true);
        }

        if(t1 && t2 && t4){
             count += recursion(i + 1, true, false);
        }

        if(t1 && !t2 && t3 && t4){
             count += recursion(i + 1, false, false);
        }

        if(!t1 && t2 && t3 && t4){
             count += recursion(i + 1, false, false);
        }

        if(t1 && t2){
             count += recursion(i + 1, true, true);
        }

        if(t1 && t2 && t3 && t4){
             count += recursion(i + 1, false, false);
        }

        if(t1 && !t2 && t3){
             count += recursion(i + 1, false, true);
        }

        if(!t1 && t2 && t4){
             count += recursion(i + 1, true, false);
        }

        if(!t1 && !t2){
             count += recursion(i + 1, true, true);
        }


        dp[i][state] = count % MOD;
        return dp[i][state];
    }

    return recursion()
};