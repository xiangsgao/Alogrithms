/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(grid) {
    
    let result = 0;
    
    const dfs = (i, j) =>{
        const cur = grid[i]?.[j];

        if(cur !== 'X'){
            return;
        }

        grid[i][j] = '.';
        
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
        

    }
    
    for(let i = 0 ; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            const cur = grid[i][j];
            if(cur === '.'){
                continue;
            }
            dfs(i, j);
            result += 1;
        }
    }
    return result;

};