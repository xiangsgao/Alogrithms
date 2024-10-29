/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    
    const cache = new Map();
    const dfs = (i, j, prev) =>{
        if(grid[i]?.[j] === undefined){
            return -1;
        }
        
        const cur = grid[i][j];
        if(cur <= prev){
            return -1;
        }
        
        const key = `${i}, ${j}`;
        if(cache.has(key)){
            return cache.get(key);
        }

       


        grid[i][j] = -Infinity
        // recurse all the possiblilities 
        const res = 1 + Math.max(
            dfs(i - 1, j + 1, cur),
            dfs(i, j + 1, cur),
            dfs(i+ 1, j + 1, cur)
        )

        
        grid[i][j] = cur;
        cache.set(key, res);

        return cache.get(key);

    }

    let res = -Infinity;
   for(let i = 0; i < grid.length; i++){
        res = Math.max(res, dfs(i, 0 , -Infinity));
    }
    return res;
};