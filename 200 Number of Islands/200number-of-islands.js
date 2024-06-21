/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0;
    
    const dfs = (i, j) =>{
        const cur = grid[i]?.[j];

        if(cur !== '1'){
            return;
        }

        grid[i][j] = '0';
        
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
        

    }
    
    for(let i = 0 ; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            const cur = grid[i][j];
            if(cur === '0'){
                continue;
            }
            dfs(i, j);
            result += 1;
        }
    }
    return result;
};