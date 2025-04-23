/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    

    
    const dfs = (i, j, coords) =>{
        const cell = grid[i]?.[j];
        if(!cell){
            return;
        }

        grid[i][j] = 0;

        coords.push([i,j]);
        dfs(i + 1, j, coords);
        dfs(i - 1, j, coords);
        dfs(i, j - 1, coords);
        dfs(i, j + 1, coords);
    }
    
    const islands = [];
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            
            if(grid[i][j]){
                const coords = [];
                dfs(i,j, coords);
                islands.push(coords);
            }
        }
    }

    const set = new Set();
    for(const island of islands){
        const coords = [];
        const topLeft = island[0];
        const [offsetX, offsetY] = topLeft;

        coords.push(`${0},${0}`);

        for(const [x,y] of island){
            coords.push(`${x-offsetX},${y-offsetY}`);
        }

        const str = coords.join(" ");
        set.add(str);
    }

   
    return set.size;
   
};