/**
 * @param {number[][]} grid
 * @return {number}
 */
 // idea is to start from the border and find all the reachable lands
 // also count the total number of lands
 // result is total minus the borderLand
var numEnclaves = function(grid) {
    const R = grid.length;
    const C = grid[0].length;
    const visited = new Set();
    const dfs = (r, c) =>{
        const key = `${r},${c}`
        if(!grid[r]?.[c] || visited.has(key)){
            return 0;
        }
        visited.add(key);
        let res = 1;
        for(const [x, y] of [[0,1], [1,0], [-1,0], [0,-1]]){
           res += dfs(r + x, c + y);
        }
        return res;
    }

    let land = 0;
    let borderLand = 0;
   
    for(let i = 0; i < R; i++){
        for(let j = 0; j < C; j++){
            land += grid[i][j];
            const key = `${i},${j}`;
            if(grid[i][j] && !visited.has(key) &&
                (i === 0 || i === R - 1) ||
                (j === 0 || j === C - 1)
            ){
                borderLand += dfs(i, j);
            }
        }
    }

    return land - borderLand;
};