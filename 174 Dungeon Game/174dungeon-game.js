/**
 * @param {number[][]} dungeon
 * @return {number}
 */
 // pretty hard problem
 // the trick is to start from the princess and then do bottom up to the heroes top left starting cell
 // add up all the values of the path. if the sum is positive, set it to zero. this is how you get the minimum cost correctly.
 // dp is look to the right and look down. which ever is the least cost, take that value and add it to the current cell cost. if postive, then again set zero.
 // if end of column then only need to look down, if end of row, only need to look right.
 // https://www.youtube.com/watch?v=4uUGxZXoR5o this vid explains it good.
var calculateMinimumHP = function(dungeon) {
    const R = dungeon.length;
    const C = dungeon[0].length;

    const dp = Array(R).fill().map(() => Array(C).fill());

    for(let i = R - 1; i >= 0; i--){
        for(let j = C - 1; j >= 0; j--){
            if(i === R - 1 && j === C - 1){
                dp[i][j] = Math.min(0, dungeon[i][j]);
            }else if(i === R - 1){
                dp[i][j] = Math.min(0, dungeon[i][j] + dp[i][j+1]);
            }else if(j === C - 1){
                dp[i][j] = Math.min(0, dungeon[i][j] + dp[i + 1][j]);
            }else{
                dp[i][j] = Math.min(0, dungeon[i][j] + Math.max(
                    dp[i][j+1], dp[i+1][j]
                ));
            }
        }
    }

    return Math.abs(dp[0][0]) + 1;
};