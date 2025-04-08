/**
 * @param {number} n
 * @return {number}
 */
 // cant solve because this question is tabulation like coin change, see the explanation below. 
var numSquares = function(n) {
    // generate all perfect squares up to n

    const dp = Array(n + 1).fill(n);

    dp[0] = 0;



    for(let i = 1; i < n + 1; i++){ // i is the target
        for(let j = 1; j < i + 1; j++){
            const square = j * j ;
            if(i - square < 0){
                break; // break because we want the minimum squares of this square plus the remaining
            }
            dp[i] = Math.min(dp[i] , 1 + dp[i - square]); // this means what is the min squares that sum up to 1, 2, 3, 4 , 5 ect. it is the min of the current val and the target minus the current square, add 1 becuase we have used the current square
        }
    }

    return dp.at(-1);
};