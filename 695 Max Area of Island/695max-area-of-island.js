/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    /***
        // 1) visite all the cells in a loop
        // 2) dfs the cells with value of 1, flip it and flip all its neighbrs to 0, return the area the island
        // 3) update max area after each dfs
    */

    const dfs = (i, j) =>{
        const cur = grid[i]?.[j];

        if(cur !== 1){
            return 0;
        }

        grid[i][j] = 0;

        return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
    }

    let maxArea = 0;
    const ROW = grid.length;
    const COL = grid[0].length;
    for(let i = 0; i < ROW; i++){
        for(let j = 0; j < COL; j++){
            if(grid[i][j] === 1){
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }
    // O(N*M) <-> O(N*M)
    /*

    */
    return maxArea;

};