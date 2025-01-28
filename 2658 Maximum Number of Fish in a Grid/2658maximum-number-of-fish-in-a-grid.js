/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    

    const dfs = (i, j) =>{
        const cur = grid[i]?.[j];

        if(!cur){
            return 0;
        }
        
        grid[i][j] = 0;
        return cur +
                dfs(i + 1, j) +
                dfs(i - 1, j) +
                dfs(i, j + 1) +
                dfs(i, j - 1);
    }

    let max = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j]){
                max = Math.max(max, dfs(i,j));
            }
        }
    }

    return max;
};